import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { BuildingDailyReport } from 'src/app/core/interfaces/building-daily-report.interface';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['building.component.scss']
})

export class BuildingComponent implements OnInit {
  buildingId: number;
  building: Building;
  breadcrumbs: Breadcrumb[];
  dailyReports: BuildingDailyReport[];

  constructor(private buildingsRepository: BuildingsRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildingId = +(this.route.snapshot.paramMap.get('buildingId') + '');
    this.getBuilding();
    this.getDailyReports();
  }

  private getDailyReports(): void {
    this.buildingsRepository.getDailyReports(this.buildingId).subscribe(reports => {
      this.dailyReports = reports;
    });
  }

  private getBuilding(): void {
    this.buildingsRepository.getBuilding(this.buildingId).subscribe(building => {
      this.building = building;
      this.breadcrumbs = this.generateBreadcrumbs();
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Moje budowy', link: '/dashboard'},
      {name: 'Budowa ' + this.building.name}
    ];
  }

  onRefreshEngineers(): void {
    this.getBuilding();
  }

  createDailyReport(): void {
    this.buildingsRepository.createDailyReport(this.buildingId).subscribe(() => {
      this.getDailyReports();
    }, error => {
      console.error(error);
    });
  }
}
