import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersRepository {

  constructor(private http: HttpClient) { }

  getLoggedInUser(): Observable<any> {
    return this.http.get<User>('/getLoggedInUser');
  }

}
