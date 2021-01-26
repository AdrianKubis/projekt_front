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

  getOperatorsWorkCards(dailyReportId: number): Observable<OperatorWorkCard[]> {
    return this.http.get<OperatorWorkCard[]>('/api/equipment-daily-reports/' + dailyReportId + '/operators-work-cards');
  }

}

