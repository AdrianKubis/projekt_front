import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersRepository } from 'src/app/core/repositories/users.repository';
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  user: User;
  isLoggedIn = false;

  constructor(private authService: AuthService, private usersRepository: UsersRepository) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    if(this.isLoggedIn) {
      this.usersRepository.getLoggedInUser().subscribe(user => {
        this.user = user;
      });
    }
  }

  getFirstLetterOfName(): string {
    if (!this.user || !this.user.firstName) {
      return '-';
    }
    return this.user.firstName.charAt(0);
  }

  public logout(): void {
    this.authService.logout();
  }
}
