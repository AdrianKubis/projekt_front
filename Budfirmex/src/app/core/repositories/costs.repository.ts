import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costs } from '../interfaces/costs.interface';

@Injectable()
export class CostsRepository {

  constructor(private http: HttpClient) {
  }
  
  getCosts(): Observable<Costs[]> {
    return this.http.get<Costs[]>('/api/building-costs');
  }
}
