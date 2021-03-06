import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../interfaces/worker.interface';

@Injectable()
export class WorkersRepository {

  constructor(private http: HttpClient) {
  }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>('/api/workers');
  }

}
