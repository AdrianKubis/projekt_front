import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WorkersRepository } from '../../../core/repositories/workers.repository';
import { Worker } from '../../../core/interfaces/worker.interface';
import { OperatorWorkCard } from '../../../core/interfaces/operator-work-card.interface';
import { EquipmentDailyReportsRepository } from '../../../core/repositories/equipment-daily-reports.repository';

@Component({
  selector: 'app-operator-work-card-modal',
  templateUrl: './operator-work-card-modal.component.html',
  styleUrls: ['operator-work-card-modal.component.scss']
})

export class OperatorWorkCardModalComponent implements OnInit {
  @Input() equipmentDailyReportId: number;
  @Input() operatorWorkCard: OperatorWorkCard;
  @Output() refreshFromModal = new EventEmitter<void>();
  private modal: NgbModalRef;
  workers: Worker[];
  model: any = {};

  constructor(private modalService: NgbModal, private workersRepository: WorkersRepository, private equipmentDailyReportsRepository: EquipmentDailyReportsRepository) {
  }

  ngOnInit(): void {
    this.workersRepository.getWorkers().subscribe(workers => {
      this.workers = workers;

      if (this.operatorWorkCard) {
        this.model.workerId = this.operatorWorkCard.worker.id;
        this.model.dateOfWorkCard = this.operatorWorkCard.dateOfWorkCard;
        this.model.harmfulHours = this.operatorWorkCard.harmfulHours;
        this.model.timeOfBegin = this.operatorWorkCard.timeOfBegin;
        this.model.timeOfEnd = this.operatorWorkCard.timeOfEnd;
      }
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createOperatorWorkCard(): void {
    this.equipmentDailyReportsRepository.createOperatorWorkCard(this.equipmentDailyReportId, +this.model.workerId, this.model.dateOfWorkCard, +this.model.harmfulHours, this.model.timeOfBegin, this.model.timeOfEnd).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

  updateOperatorWorkCard(): void {
    this.equipmentDailyReportsRepository.updateOperatorWorkCard(this.equipmentDailyReportId, this.operatorWorkCard.id, +this.model.workerId, this.model.dateOfWorkCard, +this.model.harmfulHours, this.model.timeOfBegin, this.model.timeOfEnd).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

}
