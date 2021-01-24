import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BrigadeDailyReport } from '../interfaces/brigade-daily-report.interface';
import { DoneWork } from '../interfaces/done-work.interface';
import { MaterialUsed } from '../interfaces/material-used.interface';
import { WorkCard } from '../interfaces/work-card.interface';

@Injectable()
export class BrigadesDailyReportsRepository {

  constructor(private http: HttpClient) { }

  getBrigadeDailyReport(brigadeDailyReportId: number): Observable<BrigadeDailyReport> {
    return this.http.get<BrigadeDailyReport>('/api/brigade-daily-reports/' + brigadeDailyReportId);
  }

  getWorkCards(brigadeDailyReportId: number): Observable<WorkCard[]> {
    return this.http.get<WorkCard[]>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/work-cards');
  }

  getDoneWorks(brigadeDailyReportId: number): Observable<DoneWork[]> {
    return this.http.get<DoneWork[]>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/done-works');
  }

  getMaterialsUsed(brigadeDailyReportId: number): Observable<MaterialUsed[]> {
    return this.http.get<MaterialUsed[]>('/api/daily-reports/' + brigadeDailyReportId + '/materials-used');
  }

}

