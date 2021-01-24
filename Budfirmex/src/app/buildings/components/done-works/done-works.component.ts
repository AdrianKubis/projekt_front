import { Component, Input } from '@angular/core';
import { DoneWork } from '../../../core/interfaces/done-work.interface';

@Component({
  selector: 'app-done-works',
  templateUrl: 'done-works.component.html',
  styleUrls: ['./done-works.component.scss']
})

export class DoneWorksComponent {
  @Input() doneWorks: DoneWork[];
}
