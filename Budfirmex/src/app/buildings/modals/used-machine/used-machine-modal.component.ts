import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Machine } from '../../../core/interfaces/machine.interface';
import { MachinesRepository } from '../../../core/repositories/machines.repository';
import { UsedEquipment } from '../../../core/interfaces/used-equipment.interface';
import { EquipmentDailyReportsRepository } from '../../../core/repositories/equipment-daily-reports.repository';

@Component({
  selector: 'app-used-machine-modal',
  templateUrl: './used-machine-modal.component.html',
  styleUrls: ['used-machine-modal.component.scss']
})

export class UsedMachineModalComponent implements OnInit {
  @Input() equipmentDailyReportId: number;
  @Input() usedEquipment: UsedEquipment;
  @Output() refreshFromModal = new EventEmitter<void>();
  private modal: NgbModalRef;
  machines: Machine[];
  selectedMachine: Machine;
  model: any = {};

  constructor(private modalService: NgbModal, private machinesRepository: MachinesRepository, private equipmentDailyReportsRepository: EquipmentDailyReportsRepository) {
  }

  ngOnInit(): void {
    this.machinesRepository.getMachines().subscribe(machines => {
      this.machines = machines;
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createUsedMachine(): void {
    this.equipmentDailyReportsRepository.createUsedEquipment(this.equipmentDailyReportId, this.model.machineId, this.model.workerId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

  updateUsedMachine(): void {
    this.equipmentDailyReportsRepository.updateUsedEquipment(this.usedEquipment.id, this.equipmentDailyReportId, this.model.machineId, this.model.workerId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }
}
