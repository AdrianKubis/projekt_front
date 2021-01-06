import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  userName = 'Anna Wojtkiewicz'; // TODO fetch from API

  getFirstLetterOfName(): string {
    if (!this.userName) {
      return '-';
    }
    return this.userName.charAt(0);
  }
}
