import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsRepository } from '../../../core/repositories/materials.repository';
import { Material } from '../../../core/interfaces/material.interface';

@Component({
  selector: 'app-materials-used-modal',
  templateUrl: 'materials-used-modal.component.html',
  styleUrls: ['./materials-used-modal.component.scss']
})

export class MaterialsUsedModalComponent implements OnInit {
  closeResult = '';
  materials: Material[];
  model: any = {};

  constructor(private modalService: NgbModal, private materialsRepository: MaterialsRepository) {
  }

  ngOnInit(): void {
    this.materialsRepository.getMaterials().subscribe(materials => {
      this.materials = materials;
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
