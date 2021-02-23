import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WorksRepository } from '../../../core/repositories/works.repository';
import { LabourNorm } from '../../../core/interfaces/labour-norm.interface';
import { DoneWork } from '../../../core/interfaces/done-work.interface';
import { BrigadesDailyReportsRepository } from '../../../core/repositories/brigades-daily-reports.repository';
import { QualityEvaluation } from "../../../core/interfaces/quality-evaluation.interface";
import { QualityEvaluationsRepository } from "../../../core/repositories/quality-evaluations.repository";

@Component({
  selector: 'app-done-work-modal',
  templateUrl: 'done-work-modal.component.html',
  styleUrls: ['./done-work-modal.component.scss']
})

export class DoneWorkModalComponent implements OnInit {
  @Input() brigadeDailyReportId: number;
  @Input() doneWork: DoneWork;
  labourNorms: LabourNorm[];
  model: any = {};
  private modal: NgbModalRef;
  @Output() refreshFromModal = new EventEmitter<void>();
  qualityEvaluations: QualityEvaluation[];

  constructor(private modalService: NgbModal,
              private worksRepository: WorksRepository,
              private brigadesDailyReportsRepository: BrigadesDailyReportsRepository,
              private qualityEvaluationsRepository: QualityEvaluationsRepository) {
  }

  ngOnInit(): void {
    this.worksRepository.getLabourNorms().subscribe(labourNorms => {
      this.qualityEvaluationsRepository.getQualityEvaluations().subscribe(qualityEvaluations => {
        this.labourNorms = labourNorms;
        this.qualityEvaluations = qualityEvaluations;

        if (this.doneWork) {
          this.model.quantityOfWork = this.doneWork.quantityOfWork;
          this.model.labourNormId = this.doneWork.labourNorm.id;
          this.model.qualityEvaluationId = this.doneWork.qualityEvaluation.id;
        }
      });
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createDoneWork(): void {
    this.brigadesDailyReportsRepository.createDoneWork(
      this.brigadeDailyReportId,
      +this.model.quantityOfWork,
      +this.model.labourNormId,
      +this.model.qualityEvaluationId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

  updateDoneWork(): void {
    this.brigadesDailyReportsRepository.updateDoneWork(this.doneWork.id, this.brigadeDailyReportId, +this.model.quantityOfWork, +this.model.labourNormId, +this.model.qualityEvaluationId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

}
