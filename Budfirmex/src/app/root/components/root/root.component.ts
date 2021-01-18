import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title = 'budfirmex';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showEngineerBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      // this.roles = user.roles || [];

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEngineerBoard = this.roles.includes('ROLE_ENGINEER');

      // this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
