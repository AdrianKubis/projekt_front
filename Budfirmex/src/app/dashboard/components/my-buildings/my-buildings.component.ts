import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActiveBuilding } from '../../../core/interfaces/active-building.interface';
import { NewBuildingModalComponent } from '../../modals/new-building/new-building-modal.component';

@Component({
  selector: 'app-my-buildings',
  templateUrl: 'my-buildings.component.html',
  styleUrls: ['./my-buildings.component.scss']
})

export class MyBuildingsComponent {
  closeResult = '';
  isUserSupervisor = false; // TODO fetch from API
  activeBuildings: ActiveBuilding[] = [{ // TODO fetch from API
    buildingNumber: 'buildingNumber',
    dateOfStart: new Date(),
    engineers: ['Patryk', 'Cezary'],
    plannedDateOfFinish: new Date(),
    roadName: 'Nazwa drogi',
    supervisor: 'Kierownik'
  }, {
    buildingNumber: 'buildingNumber',
    dateOfStart: new Date(),
    engineers: ['Patryk', 'Cezary'],
    plannedDateOfFinish: new Date(),
    roadName: 'Nazwa drogi',
    supervisor: 'Kierownik'
  }];

  constructor(private modalService: NgbModal) { }

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
