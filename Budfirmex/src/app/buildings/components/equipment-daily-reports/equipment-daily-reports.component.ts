import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentDailyReport } from 'src/app/core/interfaces/equipment-daily-report.interface';
import { BuildingDailyReport } from '../../../core/interfaces/building-daily-report.interface';
import { BuildingsDailyReportsRepository } from '../../../core/repositories/buildings-daily-reports.repository';

@Component({
  selector: 'app-equipment-daily-reports',
  templateUrl: 'equipment-daily-reports.component.html',
  styleUrls: ['./equipment-daily-reports.component.scss']
})

export class EquipmentDailyReportsComponent {
  @Input() buildingDailyReport: BuildingDailyReport;
  @Input() equipmentDailyReports: EquipmentDailyReport[];
  @Output() refreshData = new EventEmitter<void>();

  constructor(private buildingsDailyReportsRepository: BuildingsDailyReportsRepository) {
  }

  createEquipmentDailyReport(): void {
    this.buildingsDailyReportsRepository.createEquipmentDailyReport(this.buildingDailyReport.id).subscribe(() => {
      this.refreshData.emit();
    }, error => {
      console.error(error);
    });
  }
}
