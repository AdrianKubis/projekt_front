import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  userName = 'Anna Wojtkiewicz'; // TODO fetch from API
  isLoggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  getFirstLetterOfName(): string {
    if (!this.userName) {
      return '-';
    }
    return this.userName.charAt(0);
  }

  public logout(): void {
    this.authService.logout();
  }
}
