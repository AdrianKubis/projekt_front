import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrigadeDailyReport } from '../interfaces/brigade-daily-report.interface';
import { DoneWork } from '../interfaces/done-work.interface';
import { MaterialUsed } from '../interfaces/material-used.interface';
import { WorkCard } from '../interfaces/work-card.interface';

@Injectable()
export class BrigadesDailyReportsRepository {

  constructor(private http: HttpClient) {
  }

  getBrigadeDailyReport(brigadeDailyReportId: number): Observable<BrigadeDailyReport> {
    return this.http.get<BrigadeDailyReport>('/api/brigade-daily-reports/' + brigadeDailyReportId);
  }

  getWorkCards(brigadeDailyReportId: number): Observable<WorkCard[]> {
    return this.http.get<WorkCard[]>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/work-cards');
  }

  createWorkCard(brigadeDailyReportId: number, workerId: number, dateOfWork: Date, harmfulHours: number, timeOfBegin: Date, timeOfEnd: Date): Observable<void> {
    return this.http.post<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/work-cards', {
      workerId,
      dateOfWork,
      harmfulHours,
      timeOfBegin,
      timeOfEnd
    });
  }

  updateWorkCard(workCardId: number, brigadeDailyReportId: number, workerId: number, dateOfWork: Date, harmfulHours: number, timeOfBegin: Date, timeOfEnd: Date): Observable<void> {
    return this.http.put<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/work-cards/' + workCardId, {
      workerId,
      dateOfWork,
      harmfulHours,
      timeOfBegin,
      timeOfEnd
    });
  }

  getDoneWorks(brigadeDailyReportId: number): Observable<DoneWork[]> {
    return this.http.get<DoneWork[]>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/done-works');
  }

  createDoneWork(brigadeDailyReportId: number, quantityOfWork: number, labourNormId: number, qualityEvaluationId: number): Observable<void> {
    return this.http.post<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/done-works', {
      quantityOfWork,
      labourNormId,
      qualityEvaluationId
    });
  }

  updateDoneWork(workcardId: number, brigadeDailyReportId: number, quantityOfWork: number, labourNormId: number, qualityEvaluationId: number): Observable<void> {
    return this.http.put<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/done-works/' + workcardId, {
      quantityOfWork,
      labourNormId,
      qualityEvaluationId
    });
  }

  getMaterialsUsed(brigadeDailyReportId: number): Observable<MaterialUsed[]> {
    return this.http.get<MaterialUsed[]>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/materials-used');
  }

  createMaterialUsed(brigadeDailyReportId: number, materialId: number, quantity: number): Observable<void> {
    return this.http.post<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/materials-used', {materialId, quantity});
  }

  updateMaterialUsed(materialUsedId: number, brigadeDailyReportId: number, materialId: number, quantity: number): Observable<void> {
    return this.http.put<void>('/api/brigade-daily-reports/' + brigadeDailyReportId + '/materials-used/' + materialUsedId, {materialId, quantity});
  }
}

