import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { BuildingDailyReport } from 'src/app/core/interfaces/building-daily-report.interface';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-daily-reports',
  templateUrl: 'daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})

export class DailyReportsComponent implements OnInit {
  @Input() reports: BuildingDailyReport[] = [];
  private buildingId: number;
  public calendarOptions: CalendarOptions;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  getEvents(): any {
    return this.reports.map(report => {
      return {title: report.building.name, date: report.date, id: report.id};
    });
  }

  goToEvent(eventClick: any): void {
    const buildingDailyReportId = eventClick.event._def.publicId;
    this.router.navigate(['/buildings/' + this.buildingId + '/daily-report/' + buildingDailyReportId]);
  }

  ngOnInit(): void {
    this.buildingId = +(this.route.snapshot.paramMap.get('buildingId') + '');
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      eventClick: this.goToEvent.bind(this),
      events: this.getEvents()
    };
  }
}
