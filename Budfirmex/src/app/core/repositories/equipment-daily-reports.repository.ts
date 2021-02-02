import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDailyReport } from '../interfaces/equipment-daily-report.interface';
import { UsedEquipment } from '../interfaces/used-equipment.interface';
import { OperatorWorkCard } from '../interfaces/operator-work-card.interface';

@Injectable()
export class EquipmentDailyReportsRepository {

  constructor(private http: HttpClient) {
  }

  getEquipmentDailyReport(dailyReportId: number): Observable<EquipmentDailyReport> {
    return this.http.get<EquipmentDailyReport>('/api/equipment-daily-reports/' + dailyReportId);
  }

  getUsedEquipments(dailyReportId: number): Observable<UsedEquipment[]> {
    return this.http.get<UsedEquipment[]>('/api/equipment-daily-reports/' + dailyReportId + '/used-equipments');
  }

  createUsedEquipment(dailyReportId: number, machineId: number, workerId: number): Observable<void> {
    return this.http.post<void>('/api/equipment-daily-reports/' + dailyReportId + '/used-equipments', {
      machineId,
      workerId
    });
  }

  updateUsedEquipment(dailyReportId: number, usedEquipmentId: number, machineId: number, workerId: number): Observable<void> {
    return this.http.put<void>('/api/equipment-daily-reports/' + dailyReportId + '/used-equipments/' + usedEquipmentId, {
      machineId,
      workerId
    });
  }

  getOperatorsWorkCards(dailyReportId: number): Observable<OperatorWorkCard[]> {
    return this.http.get<OperatorWorkCard[]>('/api/equipment-daily-reports/' + dailyReportId + '/operators-work-cards');
  }

  createOperatorWorkCard(dailyReportId: number, workerId: number, dateOfWorkCard: Date, harmfulHours: number, timeOfBegin: Date, timeOfEnd: Date): Observable<void> {
    return this.http.post<void>('/api/equipment-daily-reports/' + dailyReportId + '/operators-work-cards', {
      workerId,
      dateOfWorkCard,
      harmfulHours,
      timeOfBegin,
      timeOfEnd
    });
  }

  updateOperatorWorkCard(dailyReportId: number, operatorWorkCardId: number, workerId: number, dateOfWorkCard: Date, harmfulHours: number, timeOfBegin: Date, timeOfEnd: Date): Observable<void> {
    return this.http.put<void>('/api/equipment-daily-reports/' + dailyReportId + '/operators-work-cards/' + operatorWorkCardId, {
      workerId,
      dateOfWorkCard,
      harmfulHours,
      timeOfBegin,
      timeOfEnd
    });
  }

}

