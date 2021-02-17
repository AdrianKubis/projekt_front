import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';
import { BuildingDailyReport } from 'src/app/core/interfaces/building-daily-report.interface';
import { Comment } from 'src/app/core/interfaces/comments.interface';
import { EquipmentDailyReport } from 'src/app/core/interfaces/equipment-daily-report.interface';
import { BuildingsDailyReportsRepository } from 'src/app/core/repositories/buildings-daily-reports.repository';

@Component({
  selector: 'app-building-daily-report-page',
  templateUrl: './building-daily-report.component.html',
  styleUrls: ['building-daily-report.component.scss']
})

export class BuildingDailyReportComponent implements OnInit{
  reportId: number;
  buildingDailyReport: BuildingDailyReport;
  breadcrumbs: Breadcrumb[];

  comments: Comment[];
  equipmentDailyReports: EquipmentDailyReport[];
  brigadeReports: BrigadeDailyReport[];

  constructor(private dailyReportsRepository: BuildingsDailyReportsRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reportId = +(this.route.snapshot.paramMap.get('reportId') + '');

    this.dailyReportsRepository.getDailyReport(this.reportId).subscribe( dailyReport => {
      this.buildingDailyReport = dailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });

    this.fetchDailyReports();
    this.fetchEquipmentDailyReports();
    this.fetchBrigadesReports();
  }

  fetchDailyReports(): void {
    this.dailyReportsRepository.getComments(this.reportId).subscribe(comments => {
      this.comments = comments;
    });
  }

  fetchEquipmentDailyReports(): void {
    this.dailyReportsRepository.getEquipmentDailyReports(this.reportId).subscribe(equipmentDailyReports => {
      this.equipmentDailyReports = equipmentDailyReports;
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Moje budowy', link: '/dashboard'},
      { name: 'Budowa', link: '/buildings/' + this.buildingDailyReport.building.id},
      { name: 'Raport dzienny budowy' }
    ];
  }

  fetchBrigadesReports(): void {
    this.dailyReportsRepository.getBrigadeDailyReports(this.reportId).subscribe(brigadeReports => {
      this.brigadeReports = brigadeReports;
    });
  }
}
