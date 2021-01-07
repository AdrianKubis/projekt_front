import { Component } from '@angular/core';

@Component({
  selector: 'app-building-details',
  templateUrl: 'building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})

export class BuildingDetailsComponent {
  buildNumber = '2020_11';
  roadName = 'Lublin - Chełm';
  plannedDateOfStart = new Date();
  actualDateofStart = new Date();
  plannedDateOfEnd  = new Date();
  actualDateOfEnd = new Date();
}
