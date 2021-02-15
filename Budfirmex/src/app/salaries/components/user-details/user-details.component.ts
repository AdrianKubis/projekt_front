import { Component, Input } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent {
  @Input() isSupervisor: boolean;
  @Input() user: User;
  @Input() actualBuildingsCounter: number;
  @Input() finishedBuildingsCounter: number;
}
