import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-building-details',
  templateUrl: 'building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})

export class BuildingDetailsComponent {
  @Input() buildNumber: string;
  @Input() roadName: string;
  @Input() plannedStartDate: Date;
  @Input() realStartDate: Date;
  @Input() plannedEndDate: Date;
  @Input() realEndDate: Date;
}
