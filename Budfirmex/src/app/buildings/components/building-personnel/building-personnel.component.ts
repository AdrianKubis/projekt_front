import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EngineerModalComponent } from '../../modals/engineer/engineer-modal.component';

@Component({
  selector: 'app-building-personnel',
  templateUrl: 'building-personnel.component.html',
  styleUrls: ['./building-personnel.component.scss']
})

export class BuildingPersonnelComponent {

  closeResult: string = "";

  buildingSupervisor: string = "Antoni Matrynowicz";
  buildingEngineers: string[] = ["Cezary Nowak", "Anna Wojtkiewicz", "Damian Nowad"];

  constructor(private modalService: NgbModal) { }

  addEngineer(): void {
    this.modalService.open(EngineerModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
