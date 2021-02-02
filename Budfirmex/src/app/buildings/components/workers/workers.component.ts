import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkCard } from 'src/app/core/interfaces/work-card.interface';
import { BrigadeDailyReport } from "../../../core/interfaces/brigade-daily-report.interface";
@Component({
  selector: 'app-workers',
  templateUrl: 'workers.component.html',
  styleUrls: ['./workers.component.scss']
})

export class WorkersComponent {
  @Input() workCards: WorkCard[];
  @Input() brigadeDailyReport: BrigadeDailyReport;
  @Output() refreshData = new EventEmitter<void>();
}
