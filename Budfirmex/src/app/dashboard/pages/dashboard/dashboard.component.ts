import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { User } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  activeBuildings: Building[];
  finishedBuildings: Building[];
  loggedInUser: User;

  constructor(private buildingsRepository: BuildingsRepository, private usersRepository: UsersRepository) {
  }

  ngOnInit(): void {
    this.loadBuildings();
    this.usersRepository.getLoggedInUser().subscribe(response => {
      this.loggedInUser = response;
    });
  }

  private loadBuildings(): void {
    this.buildingsRepository.getActiveBuildings().subscribe(buildings => {
      this.activeBuildings = buildings;
    });
    this.buildingsRepository.getFinishedBuildings().subscribe(finishedBuildings => {
      this.finishedBuildings = finishedBuildings;
    });
  }

  isSupervisor(): boolean {
    if (!this.loggedInUser) {
      return false;
    }
    return this.loggedInUser.role.some(role => role.name === 'SUPERVISOR');
  }

  onRefreshBuildings(): void {
    this.loadBuildings();
  }
}
