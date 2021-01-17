import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { DailyReport } from 'src/app/core/interfaces/daily-report.interface';
import { DailyReportsRepository } from 'src/app/core/repositories/daily-reports.repository';

@Component({
  selector: 'app-daily-report-page',
  templateUrl: './daily-report.component.html',
  styleUrls: ['daily-report.component.scss']
})

export class DailyReportComponent implements OnInit{
  dailyReport: DailyReport;
  breadcrumbs: Breadcrumb[];

  constructor(private DailyReportsRepository: DailyReportsRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.DailyReportsRepository.getDailyReport(this.route.snapshot.paramMap.get('reportId') + '').subscribe( dailyReport => {
      this.dailyReport = dailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      { name: "Budowa", link: "/buildings/id"},
      { name: "Raport dzienny budowy" }
    ];
  }
}
