import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherCondition } from 'src/app/core/interfaces/weather-condition.interface';

@Component({
  selector: 'app-report-details',
  templateUrl: 'report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})

export class ReportDetailsComponent {
  @Input() buildingNumber: string;
  @Input() name: string;
  @Input() date: Date;
  @Input() weatherCondition: WeatherCondition;

}
