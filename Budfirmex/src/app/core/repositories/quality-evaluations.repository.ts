import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../interfaces/worker.interface';
import { QualityEvaluation } from "../interfaces/quality-evaluation.interface";

@Injectable()
export class QualityEvaluationsRepository {

  constructor(private http: HttpClient) {
  }

  getQualityEvaluations(): Observable<QualityEvaluation[]> {
    return this.http.get<QualityEvaluation[]>('/api/quality-evaluation');
  }

}
