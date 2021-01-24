import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LabourNorm } from '../interfaces/labour-norm.interface';

@Injectable()
export class WorksRepository {

  constructor(private http: HttpClient) {
  }

  getLabourNorms(): Observable<LabourNorm[]> {
    return this.http.get<LabourNorm[]>('/api/labour-norms');
  }

}
