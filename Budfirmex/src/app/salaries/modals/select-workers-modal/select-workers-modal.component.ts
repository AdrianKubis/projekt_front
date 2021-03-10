import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkersRepository } from '../../../core/repositories/workers.repository';
import { Worker } from '../../../core/interfaces/worker.interface';

@Component({
  selector: 'app-select-workers-modal',
  templateUrl: './select-workers-modal.component.html',
  styleUrls: ['./select-workers-modal.component.scss']
})
export class SelectWorkersModalComponent implements OnInit {

  model: any = {};
  workers: Worker[];

  constructor(private workersRepository: WorkersRepository,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.workersRepository.getWorkers().subscribe(workers => {
      this.workers = workers;
    });
  }

  chooseWorker(): void {
    this.activeModal.close(this.model);
  }
}
