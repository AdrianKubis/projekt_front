import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-daily-reports',
  templateUrl: 'daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})

export class DailyReportsComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
}
