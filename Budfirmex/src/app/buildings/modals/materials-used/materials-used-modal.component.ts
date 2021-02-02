import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsRepository } from '../../../core/repositories/materials.repository';
import { Material } from '../../../core/interfaces/material.interface';
import { MaterialUsed } from "../../../core/interfaces/material-used.interface";
import { BrigadesDailyReportsRepository } from "../../../core/repositories/brigades-daily-reports.repository";

@Component({
  selector: 'app-materials-used-modal',
  templateUrl: 'materials-used-modal.component.html',
  styleUrls: ['./materials-used-modal.component.scss']
})

export class MaterialsUsedModalComponent implements OnInit {

  @Input() brigadeDailyReportId: number;
  @Input() materialUsed: MaterialUsed;
  @Output() refreshFromModal = new EventEmitter<void>();

  materials: Material[];
  model: any = {};
  private modal: NgbModalRef;

  constructor(private modalService: NgbModal, private materialsRepository: MaterialsRepository, private brigadesDailyReportsRepository: BrigadesDailyReportsRepository) {
  }

  ngOnInit(): void {
    this.materialsRepository.getMaterials().subscribe(materials => {
      this.materials = materials;
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createMaterialUsed(): void {
    this.brigadesDailyReportsRepository.createMaterialUsed(this.brigadeDailyReportId, this.model.materialId, this.model.quantity).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

  updateMaterialUsed(): void {
    this.brigadesDailyReportsRepository.updateMaterialUsed(this.materialUsed.id, this.brigadeDailyReportId, this.model.materialId, this.model.quantity).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }
}
