import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkersRepository } from '../../../core/repositories/workers.repository';
import { Worker } from '../../../core/interfaces/worker.interface';

@Component({
  selector: 'app-operator-work-card-modal',
  templateUrl: './operator-work-card-modal.component.html',
  styleUrls: ['operator-work-card-modal.component.scss']
})

export class OperatorWorkCardModalComponent implements OnInit {
  closeResult = '';
  workers: Worker[];
  model: any = {};

  constructor(private modalService: NgbModal, private workersRepository: WorkersRepository) {
  }

  ngOnInit(): void {
    this.workersRepository.getWorkers().subscribe(workers => {
      this.workers = workers;
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
