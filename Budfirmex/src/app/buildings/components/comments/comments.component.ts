import { Component, OnInit } from '@angular/core';
import { DailyReport } from 'src/app/core/interfaces/daily-report.interface';
import { DailyReportsRepository } from 'src/app/core/repositories/daily-reports.repository';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit{
  dailyReport: DailyReport[];

  constructor(private DailyReportsRepository: DailyReportsRepository) {}

  ngOnInit(): void {
    this.DailyReportsRepository.getDailyReports().subscribe( dailyReport => {
      this.dailyReport = dailyReport;
    });
  }
}