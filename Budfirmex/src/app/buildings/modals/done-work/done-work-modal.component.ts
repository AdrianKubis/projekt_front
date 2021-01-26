import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorksRepository } from '../../../core/repositories/works.repository';
import { LabourNorm } from '../../../core/interfaces/labour-norm.interface';

@Component({
  selector: 'app-done-work-modal',
  templateUrl: 'done-work-modal.component.html',
  styleUrls: ['./done-work-modal.component.scss']
})

export class DoneWorkModalComponent implements OnInit {
  closeResult = '';
  labourNorms: LabourNorm[];
  model: any = {};

  constructor(private modalService: NgbModal, private worksRepository: WorksRepository) {
  }

  ngOnInit(): void {
    this.worksRepository.getLabourNorms().subscribe(labourNorms => {
      this.labourNorms = labourNorms;
    });
  }

  open(content: any): void {
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
