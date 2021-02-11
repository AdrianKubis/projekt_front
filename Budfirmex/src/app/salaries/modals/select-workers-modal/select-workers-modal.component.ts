import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-workers-modal',
  templateUrl: './select-workers-modal.component.html',
  styleUrls: ['./select-workers-modal.component.scss']
})
export class SelectWorkersModalComponent implements OnInit {

  model: any = {};

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
