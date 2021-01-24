import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OperatorsRepository {

  constructor(private http: HttpClient) {
  }

}
