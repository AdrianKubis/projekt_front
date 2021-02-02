import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsedEquipment } from '../../../core/interfaces/used-equipment.interface';
import { EquipmentDailyReport } from "../../../core/interfaces/equipment-daily-report.interface";

@Component({
  selector: 'app-used-equipments',
  templateUrl: 'used-equipments.component.html',
  styleUrls: ['./used-equipments.component.scss']
})

export class UsedEquipmentsComponent {
  @Input() public usedEquipments: UsedEquipment[];
  @Input() equipmentDailyReport: EquipmentDailyReport;
  @Output() refreshData = new EventEmitter<void>();
}
