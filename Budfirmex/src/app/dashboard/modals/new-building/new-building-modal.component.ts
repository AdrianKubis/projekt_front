import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-building',
  templateUrl: 'new-building-modal.component.html',
  styleUrls: ['./new-building-modal.component.scss']
})

export class NewBuildingModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
