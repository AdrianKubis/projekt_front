import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../interfaces/salary.interface';

@Injectable()
export class SalaryRepository {

  constructor(private http: HttpClient) { 
  }

  getSalary(): Observable<Salary[]> {
    return this.http.get<Salary[]>('/api/salary');
  }
}