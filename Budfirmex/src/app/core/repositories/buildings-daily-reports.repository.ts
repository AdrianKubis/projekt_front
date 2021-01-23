import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BrigadeDailyReport } from '../interfaces/brigade-daily-report.interface';
import { BuildingDailyReport } from '../interfaces/building-daily-report.interface';
import { Comment } from '../interfaces/comments.interface';
import { EquipmentDailyReport } from '../interfaces/equipment-daily-report.interface';

@Injectable()

export class BuildingsDailyReportsRepository {

  constructor(private http: HttpClient) { }

  getDailyReport(dailyReportId: number): Observable<BuildingDailyReport> {
    return this.http.get<BuildingDailyReport>('/api/daily-reports/' + dailyReportId);
  }

  getComments(dailyReportId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/daily-reports/' + dailyReportId + '/comments');
  }

  getEquipmentDailyReports(dailyReportId: number): Observable<EquipmentDailyReport[]> {
    return this.http.get<EquipmentDailyReport[]>('/api/daily-reports/' + dailyReportId + '/equipment-daily-reports');
  }

  getBrigadeDailyReports(dailyReportId: number): Observable<BrigadeDailyReport[]> {
    return this.http.get<BrigadeDailyReport[]>('/api/daily-reports/' + dailyReportId + '/brigade-daily-reports');
  }

}

