import { Component, Input} from '@angular/core';
import { Costs } from '../../../core/interfaces/costs.interface';

@Component({
  selector: 'app-construction-costs',
  templateUrl: './construction-costs.component.html',
  styleUrls: ['./construction-costs.component.scss']
})
export class ConstructionCostsComponent {

  @Input() costs: Costs[];

  constructor() { }

}
