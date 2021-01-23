import { Component, Input } from '@angular/core';
import { WorkCard } from 'src/app/core/interfaces/work-card.interface';
@Component({
  selector: 'app-workers',
  templateUrl: 'workers.component.html',
  styleUrls: ['./workers.component.scss']
})

export class WorkersComponent {
  @Input() workCards: WorkCard[];
}
