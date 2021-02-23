import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Machine } from '../../../core/interfaces/machine.interface';
import { MachinesRepository } from '../../../core/repositories/machines.repository';
import { UsedEquipment } from '../../../core/interfaces/used-equipment.interface';
import { EquipmentDailyReportsRepository } from '../../../core/repositories/equipment-daily-reports.repository';
import { WorkersRepository } from "../../../core/repositories/workers.repository";
import { Worker } from "../../../core/interfaces/worker.interface";

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
  workers: Worker[];

  constructor(private modalService: NgbModal,
              private machinesRepository: MachinesRepository,
              private equipmentDailyReportsRepository: EquipmentDailyReportsRepository,
              private workersRepository: WorkersRepository) {
  }

  ngOnInit(): void {
    this.machinesRepository.getMachines().subscribe(machines => {
      this.workersRepository.getWorkers().subscribe(workers => {
        this.workers = workers;
        this.machines = machines;

        if (this.usedEquipment) {
          this.model.machineId = this.usedEquipment.machine.id;
          this.model.workerId = this.usedEquipment.worker.id;
        }
      });
    });
  }

  getSelectedMachine(): Machine | null | undefined {
    return (this.model.machineId && this.machines) ? this.machines.find(machine => machine.id === +this.model.machineId) : null;
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createUsedMachine(): void {
    this.equipmentDailyReportsRepository.createUsedEquipment(this.equipmentDailyReportId, +this.model.machineId, +this.model.workerId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }

  updateUsedMachine(): void {
    this.equipmentDailyReportsRepository.updateUsedEquipment(this.usedEquipment.id, this.equipmentDailyReportId, +this.model.machineId, +this.model.workerId).subscribe(() => {
      this.refreshFromModal.emit();
      this.modal.close();
    });
  }
}
