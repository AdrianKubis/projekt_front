import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoneWork } from '../../../core/interfaces/done-work.interface';
import { BrigadeDailyReport } from '../../../core/interfaces/brigade-daily-report.interface';

@Component({
  selector: 'app-done-works',
  templateUrl: 'done-works.component.html',
  styleUrls: ['./done-works.component.scss']
})

export class DoneWorksComponent {
  @Input() doneWorks: DoneWork[];
  @Input() brigadeDailyReport: BrigadeDailyReport;
  @Output() refreshData = new EventEmitter<void>();

}
