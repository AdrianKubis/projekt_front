import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Building } from '../interfaces/building.interface';

@Injectable()
export class BuildingsRepository {

  constructor() { }

  getBuilding(buildingId: string): Observable<Building> {
    return of({
      buildingNumber: '1',
      dateOfStart: new Date(),
      engineers: ['Patryk', 'Cezary'],
      plannedDateOfFinish: new Date(),
      roadName: 'Nazwa drogi',
      supervisor: 'Kierownik'
    });
  }

  getActiveBuildings(): Observable<Building[]> {
    return of([{
      buildingNumber: '1',
      dateOfStart: new Date(),
      engineers: ['Patryk', 'Cezary'],
      plannedDateOfFinish: new Date(),
      roadName: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }, {
      buildingNumber: '2',
      dateOfStart: new Date(),
      engineers: ['Patryk', 'Cezary'],
      plannedDateOfFinish: new Date(),
      roadName: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }]);
  }

  getFinishedBuildings(): Observable<Building[]> {
    return of([{
      buildingNumber: '3',
      dateOfStart: new Date(),
      engineers: ['Patryk', 'Cezary'],
      dateOfFinish: new Date(),
      plannedDateOfFinish: new Date(),
      roadName: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }, {
      buildingNumber: '4',
      dateOfStart: new Date(),
      engineers: ['Patryk', 'Cezary'],
      dateOfFinish: new Date(),
      plannedDateOfFinish: new Date(),
      roadName: 'Nazwa drogi',
      supervisor: 'Kierownik'
    }]);
  }

}
