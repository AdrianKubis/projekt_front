import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent {
  userName = 'Anna Wojtkiewicz';
  isUserSupervisor = true; // TODO fetch from API
  permissionNumber = 'BD/2013/24';
  actualBuildingsCounter = 18;
  finishedBuildingsCounter = 24;
}
