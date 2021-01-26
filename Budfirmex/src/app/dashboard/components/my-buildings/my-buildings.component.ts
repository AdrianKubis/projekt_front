import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Building } from '../../../core/interfaces/building.interface';
import { NewBuildingModalComponent } from '../../modals/new-building/new-building-modal.component';

@Component({
  selector: 'app-my-buildings',
  templateUrl: 'my-buildings.component.html',
  styleUrls: ['./my-buildings.component.scss']
})

export class MyBuildingsComponent {
  @Input() isSupervisor: boolean;
  @Input() activeBuildings: Building[];
  @Input() finishedBuildings: Building[];
  @Output() refreshBuildings = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {
  }

  openAddNewBuildingModal(): void {
    this.modalService.open(NewBuildingModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.refreshBuildings.emit();
    });
  }
}
