import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Building } from '../interfaces/building.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuildingsRepository {

  constructor(private http: HttpClient) { }

  getBuilding(buildingId: string): Observable<Building> {
    return this.http.get<Building>('/budowa/' + buildingId);
  }

  getActiveBuildings(): Observable<Building[]> {
    return of([{
      coordinates: '',
      dailyWorkReports: [],
      description: '',
      constructionSiteId: '1',
      engineers: ['Patryk', 'Cezary'],
      plannedStartDate: new Date(),
      plannedEndDate: new Date(),
      name: 'Nazwa drogi',
      supervisor: 'Kierownik',
      dateOfFinish: new Date()
    }, {
      coordinates: '',
      dailyWorkReports: [],
      description: '',
      constructionSiteId: '2',
      plannedStartDate: new Date(),
      engineers: ['Patryk', 'Cezary'],
      plannedEndDate: new Date(),
      name: 'Nazwa drogi',
      supervisor: 'Kierownik',
      dateOfFinish: new Date()
    }]);
  }

  getFinishedBuildings(): Observable<Building[]> {
    return of([{
      coordinates: '',
      dailyWorkReports: [],
      description: '',
      constructionSiteId: '3',
      plannedStartDate: new Date(),
      engineers: ['Patryk', 'Cezary'],
      dateOfFinish: new Date(),
      plannedEndDate: new Date(),
      name: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }, {
      coordinates: '',
      dailyWorkReports: [],
      description: '',
      constructionSiteId: '4',
      plannedStartDate: new Date(),
      engineers: ['Patryk', 'Cezary'],
      dateOfFinish: new Date(),
      plannedEndDate: new Date(),
      name: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }]);
  }

}
