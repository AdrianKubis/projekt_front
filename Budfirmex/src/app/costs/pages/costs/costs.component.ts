import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {
  buildingId: number;
  building: Building;
  breadcrumbs: Breadcrumb[];

  constructor(private buildingsRepository: BuildingsRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildingId = +(this.route.snapshot.paramMap.get('buildingId') + '');
    this.getBuilding();
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
      {name: 'Budowa ' + this.building.buildingNumber}
    ];
  }

  onRefreshEngineers(): void {
    this.getBuilding();
  }

}
