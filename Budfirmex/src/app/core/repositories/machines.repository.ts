import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../interfaces/machine.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MachinesRepository {

  constructor(private http: HttpClient) {
  }

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>('/api/machines');
  }
}
