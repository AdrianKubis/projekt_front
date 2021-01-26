import { Component, Input } from '@angular/core';
import { OperatorWorkCard } from '../../../core/interfaces/operator-work-card.interface';

@Component({
  selector: 'app-operators',
  templateUrl: 'operators-work-cards.component.html',
  styleUrls: ['./operators-work-cards.component.scss']
})

export class OperatorsWorkCardsComponent {
  @Input() operatorsWorkCards: OperatorWorkCard[];
}
