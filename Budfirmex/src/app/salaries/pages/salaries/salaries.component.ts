import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { User } from '../../../core/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss']
})
export class SalariesComponent implements OnInit {

  activeBuildings: Building[];
  finishedBuildings: Building[];
  loggedInUser: User;
  breadcrumbs: Breadcrumb[];

  constructor(private buildingsRepository: BuildingsRepository, private usersRepository: UsersRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadBuildings();
    this.usersRepository.getLoggedInUser().subscribe(response => {
      this.loggedInUser = response;
      this.breadcrumbs = this.generateBreadcrumbs();
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
  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Moje budowy', link: '/dashboard'}
    ];
  }

  isSupervisor(): boolean {
    if (!this.loggedInUser) {
      return false;
    }
    return this.loggedInUser.roles.some(role => role.name === 'SUPERVISOR');
  }

  onRefreshBuildings(): void {
    this.loadBuildings();
  }

}
