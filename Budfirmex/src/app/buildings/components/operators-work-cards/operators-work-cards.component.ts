import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperatorWorkCard } from '../../../core/interfaces/operator-work-card.interface';
import { EquipmentDailyReport } from '../../../core/interfaces/equipment-daily-report.interface';

@Component({
  selector: 'app-operators',
  templateUrl: 'operators-work-cards.component.html',
  styleUrls: ['./operators-work-cards.component.scss']
})

export class OperatorsWorkCardsComponent {
  @Input() operatorsWorkCards: OperatorWorkCard[];
  @Input() equipmentDailyReport: EquipmentDailyReport;
  @Output() refreshData = new EventEmitter<void>();
}
