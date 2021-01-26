import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../interfaces/building.interface';
import { HttpClient } from '@angular/common/http';
import { BuildingDailyReport } from '../interfaces/building-daily-report.interface';

@Injectable()
export class BuildingsRepository {

  constructor(private http: HttpClient) {
  }

  getBuilding(buildingId: number): Observable<Building> {
    return this.http.get<Building>('/api/buildings/' + buildingId);
  }

  getActiveBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>('/api/buildings/active');
  }

  getFinishedBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>('/api/buildings/finished');
  }

  getDailyReports(buildingId: number): Observable<BuildingDailyReport[]> {
    return this.http.get<BuildingDailyReport[]>('/api/buildings/' + buildingId + '/daily-reports');
  }

}
