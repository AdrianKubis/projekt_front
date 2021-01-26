import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/interfaces/user.interface';
import { EngineerModalComponent } from '../../modals/engineer/engineer-modal.component';

@Component({
  selector: 'app-building-personnel',
  templateUrl: 'building-personnel.component.html',
  styleUrls: ['./building-personnel.component.scss']
})

export class BuildingPersonnelComponent {

  @Input() buildingId: number;
  @Input() engineers: User[];
  @Input() supervisor: User;

  @Output() refreshEngineers = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {
  }

  addEngineer(): void {
    const modal = this.modalService.open(EngineerModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modal.componentInstance.buildingId = this.buildingId;
    modal.result.then((result) => {
      this.refreshEngineers.emit();
    });
  }
}
