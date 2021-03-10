import { Component, OnInit } from '@angular/core';
import { Costs } from 'src/app/core/interfaces/costs.interface';
import { CostsRepository } from 'src/app/core/repositories/costs.repository';
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
  costs: Costs[];
  buildingId: number;
  building: Building;
  breadcrumbs: Breadcrumb[];

  constructor(private buildingsRepository: BuildingsRepository, private costsRepository: CostsRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildingId = +(this.route.snapshot.paramMap.get('buildingId') + '');
    this.getBuilding();
    this.loadCosts();
  }

  private getBuilding(): void {
    this.buildingsRepository.getBuilding(this.buildingId).subscribe(building => {
      this.building = building;
      this.breadcrumbs = this.generateBreadcrumbs();
    });
  }

  private loadCosts(): void {
    this.costsRepository.getCosts(this.buildingId).subscribe(costs => {
      this.costs = costs;
    });
  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Moje budowy', link: '/dashboard'},
      {name: 'Budowa ' + this.building.buildingNumber, link: '/buildings/' + this.buildingId},
      {name: 'Koszty'}
    ];
  }

}
