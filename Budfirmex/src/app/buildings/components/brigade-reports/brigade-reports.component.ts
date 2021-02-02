import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';
import { BuildingDailyReport } from '../../../core/interfaces/building-daily-report.interface';
import { BuildingsDailyReportsRepository } from '../../../core/repositories/buildings-daily-reports.repository';

@Component({
  selector: 'app-brigade-reports',
  templateUrl: 'brigade-reports.component.html',
  styleUrls: ['./brigade-reports.component.scss']
})

export class BrigadeReportsComponent {
  @Input() buildingDailyReport: BuildingDailyReport;
  @Input() brigadeDailyReports: BrigadeDailyReport[];
  @Output() refreshData = new EventEmitter<void>();

  constructor(private buildingsDailyReportsRepository: BuildingsDailyReportsRepository) {
  }

  createBrigadeDailyReport(): void {
    this.buildingsDailyReportsRepository.createBrigadeDailyReport(this.buildingDailyReport.id).subscribe(() => {
      this.refreshData.emit();
    }, error => {
      console.error(error);
    });
  }
}
