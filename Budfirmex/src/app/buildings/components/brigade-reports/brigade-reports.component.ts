import { Component, OnInit } from '@angular/core';
import { DailyReport } from 'src/app/core/interfaces/daily-report.interface';
import { DailyReportsRepository } from 'src/app/core/repositories/daily-reports.repository';

@Component({
  selector: 'app-brigade-reports',
  templateUrl: 'brigade-reports.component.html',
  styleUrls: ['./brigade-reports.component.scss']
})

export class BrigadeReportsComponent implements OnInit{
  dailyReports: DailyReport[];

  constructor(private dailyReportsRepository: DailyReportsRepository) {}

  ngOnInit(): void {
    this.dailyReportsRepository.getDailyReports().subscribe( dailyReport => {
      this.dailyReports = dailyReport;
    });
  }
}
