import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';
import { BuildingDailyReport } from 'src/app/core/interfaces/building-daily-report.interface';
import { Comment } from 'src/app/core/interfaces/comments.interface';
import { EquipmentDailyReport } from 'src/app/core/interfaces/equipment-daily-report.interface';
import { BuildingsDailyReportsRepository } from 'src/app/core/repositories/buildings-daily-reports.repository';

@Component({
  selector: 'app-daily-report-page',
  templateUrl: './daily-report.component.html',
  styleUrls: ['daily-report.component.scss']
})

export class DailyReportComponent implements OnInit{
  reportId: number;
  dailyReport: BuildingDailyReport;
  breadcrumbs: Breadcrumb[];

  comments: Comment[];
  equipmentDailyReports: EquipmentDailyReport[];
  brigadeReports: BrigadeDailyReport[];

  constructor(private dailyReportsRepository: BuildingsDailyReportsRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reportId = +(this.route.snapshot.paramMap.get('reportId') + '');

    this.dailyReportsRepository.getDailyReport(this.reportId).subscribe( dailyReport => {
      this.dailyReport = dailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });

    this.dailyReportsRepository.getComments(this.reportId).subscribe(comments => {
      this.comments = comments;
    });

    this.dailyReportsRepository.getEquipmentDailyReports(this.reportId).subscribe(equipmentDailyReports => {
      this.equipmentDailyReports = equipmentDailyReports;
    });

    this.dailyReportsRepository.getBrigadeDailyReports(this.reportId).subscribe(brigadeReports => {
      this.brigadeReports = brigadeReports;
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      { name: 'Budowa', link: '/buildings/id'},
      { name: 'Raport dzienny budowy' }
    ];
  }
}
