import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DailyReport } from '../interfaces/daily-report.interface';

@Injectable()

export class DailyReportsRepository {

  constructor() { }

  getDailyReport(reportId: string): Observable<DailyReport> {
    return of({
      reportNumber: '2020_11',
      drafted: 'Adam Nowakowski'
    });
  }

  getDailyReports(): Observable<DailyReport[]> {
    return of([{
      reportNumber: '2020_11',
      drafted: 'Adam Nowakowski'
    },

    {
      reportNumber: '2020_11',
      drafted: 'Adam Nowakowski'
    }
    ]);
  }
}

