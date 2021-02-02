import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialUsed } from '../../../core/interfaces/material-used.interface';
import { BrigadeDailyReport } from "../../../core/interfaces/brigade-daily-report.interface";

@Component({
  selector: 'app-materials-used',
  templateUrl: 'material-used.component.html',
  styleUrls: ['./material-used.component.scss']
})

export class MaterialUsedComponent {
  @Input() materialsUsed: MaterialUsed[];
  @Input() brigadeDailyReport: BrigadeDailyReport;
  @Output() refreshData = new EventEmitter<void>();

}
