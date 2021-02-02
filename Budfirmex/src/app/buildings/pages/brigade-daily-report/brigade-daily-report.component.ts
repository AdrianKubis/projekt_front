import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';
import { WorkCard } from 'src/app/core/interfaces/work-card.interface';
import { BrigadesDailyReportsRepository } from 'src/app/core/repositories/brigades-daily-reports.repository';
import { DoneWork } from '../../../core/interfaces/done-work.interface';
import { MaterialUsed } from '../../../core/interfaces/material-used.interface';

@Component({
  selector: 'app-brigade-daily-report-page',
  templateUrl: './brigade-daily-report.component.html',
  styleUrls: ['brigade-daily-report.component.scss']
})

export class BrigadeDailyReportComponent implements OnInit {
  brigadeDailyReportId: number;
  brigadeDailyReport: BrigadeDailyReport;
  breadcrumbs: Breadcrumb[];

  workCards: WorkCard[];
  doneWorks: DoneWork[];
  materialsUsed: MaterialUsed[];

  constructor(private brigadesDailyReportsRepository: BrigadesDailyReportsRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.brigadeDailyReportId = +(this.route.snapshot.paramMap.get('brigadeId') + '');

    this.brigadesDailyReportsRepository.getBrigadeDailyReport(this.brigadeDailyReportId).subscribe(brigadeDailyReport => {
      this.brigadeDailyReport = brigadeDailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });

    this.fetchWorkCards();
    this.fetchDoneWorks();
    this.fetchMaterialsUsed();
  }

  fetchMaterialsUsed(): void {
    this.brigadesDailyReportsRepository.getMaterialsUsed(this.brigadeDailyReportId).subscribe(materialsUsed => {
      this.materialsUsed = materialsUsed;
    });
  }

  fetchDoneWorks(): void {
    this.brigadesDailyReportsRepository.getDoneWorks(this.brigadeDailyReportId).subscribe(doneWorks => {
      this.doneWorks = doneWorks;
    });
  }

  fetchWorkCards(): void {
    this.brigadesDailyReportsRepository.getWorkCards(this.brigadeDailyReportId).subscribe(workCards => {
      this.workCards = workCards;
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Budowa', link: '/buildings/id'},
      {name: 'Raport dzienny budowy', link: '/buildings/id/brigade-report/id'},
      {name: 'Raport dzienny brygady'}
    ];
  }
}
