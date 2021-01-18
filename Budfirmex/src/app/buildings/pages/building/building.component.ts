import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'src/app/core/interfaces/breadcrumb.interface';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['building.component.scss']
})

export class BuildingComponent implements OnInit {
  building: Building;
  breadcrumbs: Breadcrumb[];

  constructor(private buildingsRepository: BuildingsRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.buildingsRepository.getBuilding(this.route.snapshot.paramMap.get('buildingId') + '').subscribe(building => {
      this.building = building;
      this.breadcrumbs = this.generateBreadcrumbs();
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      { name: 'Moje budowy', link: '/dashboard'},
      { name: 'Budowa ' + this.building.constructionSiteId }
    ];
  }

}
