import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/core/interfaces/building.interface';
import { Salary } from 'src/app/core/interfaces/salary.interface';
import { SalaryRepository } from 'src/app/core/repositories/salary.repository';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { User } from '../../../core/interfaces/user.interface';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss']
})
export class SalariesComponent implements OnInit {
  salary: Salary[];
  activeBuildings: Building[];
  finishedBuildings: Building[];
  loggedInUser: User;
  breadcrumbs: Breadcrumb[];
  workerId: string;

  constructor(private salaryRepository: SalaryRepository,
              private usersRepository: UsersRepository,
              private buildingsRepository: BuildingsRepository) {
  }

  ngOnInit(): void {
    this.loadSalaries();
    this.loadBuildings();
    this.usersRepository.getLoggedInUser().subscribe(response => {
      this.loggedInUser = response;
      this.breadcrumbs = this.generateBreadcrumbs();
    });
  }

  private loadSalaries(): void {
    if (this.workerId) {
      this.salaryRepository.getSalary(this.workerId).subscribe(salary => {
        this.salary = salary;
      });
    }
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
      {name: 'Moje budowy', link: '/dashboard'},
      {name: 'Pensje pracowników'}
    ];
  }

  isSupervisor(): boolean {
    if (!this.loggedInUser) {
      return false;
    }
    return this.loggedInUser.role.some(role => role.name === 'SUPERVISOR');
  }

  onRefreshSalaries(workerId: string): void {
    this.workerId = workerId;
    this.loadSalaries();
  }

}
