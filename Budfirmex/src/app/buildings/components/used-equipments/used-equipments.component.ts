import { Component, Input } from '@angular/core';
import { UsedEquipment } from '../../../core/interfaces/used-equipment.interface';

@Component({
  selector: 'app-used-equipments',
  templateUrl: 'used-equipments.component.html',
  styleUrls: ['./used-equipments.component.scss']
})

export class UsedEquipmentsComponent {
  @Input() public usedEquipments: UsedEquipment[];
}
