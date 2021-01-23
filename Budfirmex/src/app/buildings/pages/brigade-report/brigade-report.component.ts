import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';
import { WorkCard } from 'src/app/core/interfaces/work-card.interface';
import { BrigadesDailyReportsRepository } from 'src/app/core/repositories/brigades-daily-reports.repository';

@Component({
  selector: 'app-brigade-report-page',
  templateUrl: './brigade-report.component.html',
  styleUrls: ['brigade-report.component.scss']
})

export class BrigadeReportComponent {
  brigadeDailyReportId: number;
  brigadeDailyReport: BrigadeDailyReport;
  breadcrumbs: Breadcrumb[];

  workCards: WorkCard[];

  constructor(private brigadesDailyReportsRepository: BrigadesDailyReportsRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.brigadeDailyReportId = +(this.route.snapshot.paramMap.get('brigadeId') + '');

    this.brigadesDailyReportsRepository.getBrigadeDailyReport(this.brigadeDailyReportId).subscribe( brigadeDailyReport => {
      this.brigadeDailyReport = brigadeDailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });

    this.brigadesDailyReportsRepository.getWorkCards(this.brigadeDailyReportId).subscribe(workCards => {
      this.workCards = workCards;
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      { name: 'Budowa', link: '/buildings/id'},
      { name: 'Raport dzienny budowy', link: '/buildings/id/brigade-report/id' },
      { name: 'Raport dzienny brygady' }
    ];
  }

}
