import { Component, Input } from '@angular/core';
import { MaterialUsed } from '../../../core/interfaces/material-used.interface';

@Component({
  selector: 'app-materials-used',
  templateUrl: 'material-used.component.html',
  styleUrls: ['./material-used.component.scss']
})

export class MaterialUsedComponent {
  @Input() materialsUsed: MaterialUsed[];
}
