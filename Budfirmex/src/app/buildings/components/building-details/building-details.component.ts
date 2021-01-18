import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-building-details',
  templateUrl: 'building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})

export class BuildingDetailsComponent {
  @Input() buildNumber: string;
  @Input() roadName: string;
  @Input() plannedDateOfStart: Date;
  @Input() actualDateofStart: Date;
  @Input() plannedDateOfEnd: Date;
  @Input() actualDateOfEnd: Date;
}
