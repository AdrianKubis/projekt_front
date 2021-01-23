import { Component, Input } from '@angular/core';
import { EquipmentDailyReport } from 'src/app/core/interfaces/equipment-daily-report.interface';

@Component({
  selector: 'app-equipment-daily-reports',
  templateUrl: 'equipment-daily-reports.component.html',
  styleUrls: ['./equipment-daily-reports.component.scss']
})

export class EquipmentDailyReportsComponent {
  @Input() equipmentDailyReports: EquipmentDailyReport[];
}
