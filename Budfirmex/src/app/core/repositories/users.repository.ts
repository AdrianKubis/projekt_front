import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Role } from '../interfaces/role.interface';

@Injectable()
export class UsersRepository {

  constructor(private http: HttpClient) {
  }

  getLoggedInUser(): Observable<User> {
    return this.http.get<User>('/api/loggedInUser');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('/api/roles');
  }

}
