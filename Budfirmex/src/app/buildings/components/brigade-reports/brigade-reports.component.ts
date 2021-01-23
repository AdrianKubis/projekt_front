import { Component, Input } from '@angular/core';
import { BrigadeDailyReport } from 'src/app/core/interfaces/brigade-daily-report.interface';

@Component({
  selector: 'app-brigade-reports',
  templateUrl: 'brigade-reports.component.html',
  styleUrls: ['./brigade-reports.component.scss']
})

export class BrigadeReportsComponent {
  @Input() brigadeReports: BrigadeDailyReport[];

}
