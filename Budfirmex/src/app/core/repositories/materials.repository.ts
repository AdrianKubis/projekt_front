import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material.interface';

@Injectable()
export class WorkersRepository {

  constructor(private http: HttpClient) {
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>('/api/materials');
  }

}
