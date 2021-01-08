import { Component } from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-engineer-modal',
  templateUrl: 'engineer-modal.component.html',
  styleUrls: ['./engineer-modal.component.scss']
})

export class EngineerModalComponent {
  selectedEngineer = '';
  closeResult = '';
  engineers = ["Cezary Nowak", "Kamil Kondrat", "Marzena Jasińska"];

  constructor(public activeModal: NgbActiveModal) {}

}
