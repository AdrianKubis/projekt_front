import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectWorkersModalComponent } from '../../modals/select-workers-modal/select-workers-modal.component';

@Component({
  selector: 'app-workers-salaries',
  templateUrl: './workers-salaries.component.html',
  styleUrls: ['./workers-salaries.component.scss']
})
export class WorkersSalariesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSelectWorkersModal(): void {
    this.modalService.open(SelectWorkersModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
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
