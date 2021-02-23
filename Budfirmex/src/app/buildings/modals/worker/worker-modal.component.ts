import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WorkersRepository } from '../../../core/repositories/workers.repository';
import { Worker } from '../../../core/interfaces/worker.interface';
import { BrigadesDailyReportsRepository } from '../../../core/repositories/brigades-daily-reports.repository';
import { WorkCard } from "../../../core/interfaces/work-card.interface";

@Component({
  selector: 'app-worker-modal',
  templateUrl: 'worker-modal.component.html',
  styleUrls: ['./worker-modal.component.scss']
})

export class WorkerModalComponent implements OnInit {

  @Input() brigadeDailyReportId: number;
  @Input() workCard: WorkCard;
  workers: Worker[];
  model: any = {};

  @Output() refreshFromModal = new EventEmitter<void>();
  private error: any;
  private modal: NgbModalRef;

  constructor(private modalService: NgbModal,
              private workersRepository: WorkersRepository,
              private brigadesDailyReportsRepository: BrigadesDailyReportsRepository) {
  }

  ngOnInit(): void {
    this.workersRepository.getWorkers().subscribe(workers => {
      this.workers = workers;

      if (this.workCard) {
        this.model.workerId = this.workCard.worker.id;
        this.model.harmfulHours = this.workCard.harmfulHours;
        this.model.dateOfWork = this.workCard.dateOfWork;
        this.model.timeOfBegin = this.workCard.timeOfBegin;
        this.model.timeOfEnd = this.workCard.timeOfEnd;
      }
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createWorkCard(): void {
    this.brigadesDailyReportsRepository.createWorkCard(
      this.brigadeDailyReportId,
      +this.model.workerId,
      this.model.dateOfWork,
      +this.model.harmfulHours,
      this.model.timeOfBegin,
      this.model.timeOfEnd
    ).subscribe(() => {
      this.modal.close();
      this.refreshFromModal.emit();
    }, error => {
      this.error = error;
    });
  }

  updateWorkCard(): void {
    this.brigadesDailyReportsRepository.updateWorkCard(
      this.workCard.id,
      this.brigadeDailyReportId,
      +this.model.workerId,
      this.model.dateOfWork,
      +this.model.harmfulHours,
      this.model.timeOfBegin,
      this.model.timeOfEnd
    ).subscribe(() => {
      this.modal.close();
      this.refreshFromModal.emit();
    }, error => {
      this.error = error;
    });
  }
}
