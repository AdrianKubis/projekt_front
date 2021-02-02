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

  createBuilding(buildingNumber: string,
                 name: string,
                 coordinates: string,
                 plannedStartDate: Date,
                 plannedEndDate: Date,
                 engineersIds: number[],
                 supervisorId: number
  ): Observable<void> {
    return this.http.post<void>('/api/buildings', {
      buildingNumber,
      name,
      coordinates,
      plannedStartDate,
      plannedEndDate,
      engineersIds,
      supervisorId
    });
  }

  addEngineerToBuilding(buildingId: number, userId: number): Observable<void> {
    return this.http.post<void>('/api/buildings/' + buildingId + '/engineers', {userId});
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

  createDailyReport(buildingId: number): Observable<void> {
    return this.http.post<void>('/api/buildings/' + buildingId + '/daily-reports', {});
  }

}
