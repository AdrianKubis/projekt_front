import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from "./token-storage.service";
import { User } from "../interfaces/user.interface";
import { map } from "rxjs/operators";

const AUTH_API = 'https://localhost';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    responseType: 'text',
    accept: 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  isAuthenticated(): boolean {
    return !!this.tokenStorage.getToken();
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      login,
      password
    });
  }

  register(user: User): Observable<any> {
    return this.http.post(AUTH_API + '/uzytkownicy/sign-up', {
      firstname : user.firstName,
      lastname : user.lastName,
      email : user.email,
      username : user.login,
      password : user.password,
      phoneNumber : user.phoneNumber,
    }, httpOptions);
  }

  verifyToken(token: string): Observable<any> {
    return this.http.get(AUTH_API + '/accountConfirm?token=' + token);
  }

  logout(): void {
    return this.tokenStorage.signOut();
  }
}
