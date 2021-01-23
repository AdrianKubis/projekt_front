import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { BuildingDailyReport } from 'src/app/core/interfaces/building-daily-report.interface';

@Component({
  selector: 'app-daily-reports',
  templateUrl: 'daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})

export class DailyReportsComponent {
  @Input() reports: BuildingDailyReport[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
}
