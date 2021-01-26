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
  @Input() reports: BuildingDailyReport[] = [{ // TODO remove example data
    id: 1,
    building: {
      name: 'asd',
      coordinates: 'a',
      plannedStartDate: new Date(),
      plannedEndDate: new Date(),
      buildingNumber: '23',
      engineers: [],
      id: 1,
      realEndDate: new Date(),
      realStartDate: new Date(),
      supervisor: {
        id: 1,
        lastName: '123',
        permissionNumber: '123',
        firstName: 'asd',
        roles: [],
        phoneNumber: '123',
        password: '123',
        email: '123213',
        login: 'asdasd'
      }
    },
    date: new Date(),
    weatherCondition: {id: 1, weatherCondition: 'Deszczowo'}
  }];
  private buildingId: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.goToEvent.bind(this),
    events: this.getEvents()
  };

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
  }
}
