import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';
import { Building } from '../../../core/interfaces/building.interface';
import { NewBuildingModalComponent } from '../../modals/new-building/new-building-modal.component';

@Component({
  selector: 'app-my-buildings',
  templateUrl: 'my-buildings.component.html',
  styleUrls: ['./my-buildings.component.scss']
})

export class MyBuildingsComponent implements OnInit {
  closeResult = '';
  isUserSupervisor = false; // TODO fetch from API
  @Input() buildings: Building[];
  activeBuildings: Building[];
  finishedBuildings: Building[];

  constructor(private modalService: NgbModal, private buildingsRepository: BuildingsRepository) { }

  ngOnInit(): void {
    this.buildingsRepository.getActiveBuildings().subscribe(activeBuildings => {
      this.activeBuildings = activeBuildings;
    });
    this.buildingsRepository.getFinishedBuildings().subscribe(finishedBuildings => {
      this.finishedBuildings = finishedBuildings;
    });
  }

  openAddNewBuildingModal() {
    this.modalService.open(NewBuildingModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
