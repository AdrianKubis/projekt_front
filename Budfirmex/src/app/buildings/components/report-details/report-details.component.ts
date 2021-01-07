import { Component } from '@angular/core';

@Component({
  selector: 'app-report-details',
  templateUrl: 'report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})

export class ReportDetailsComponent {
  buildNumber = '2020_11';
  roadName = 'Lublin - Chełm';
  reportDate = new Date();
  actualDateofStart = new Date();
}
