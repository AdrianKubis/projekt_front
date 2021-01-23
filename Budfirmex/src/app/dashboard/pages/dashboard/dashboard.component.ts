import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/core/interfaces/building.interface';
import { BuildingsRepository } from 'src/app/core/repositories/buildings.repository';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  buildings: Building[];

  constructor(private buildingsRepository: BuildingsRepository) {}

  ngOnInit(): void {
    this.buildingsRepository.getAllBuildings().subscribe(response => {

      this.buildings = (response as any)._embedded.budowa;
    })
  }
}
