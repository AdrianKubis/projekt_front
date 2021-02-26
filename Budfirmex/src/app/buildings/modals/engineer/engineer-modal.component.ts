import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { User } from '../../../core/interfaces/user.interface';
import { BuildingsRepository } from '../../../core/repositories/buildings.repository';

@Component({
  selector: 'app-engineer-modal',
  templateUrl: 'engineer-modal.component.html',
  styleUrls: ['./engineer-modal.component.scss']
})

export class EngineerModalComponent implements OnInit {
  engineers: User[];
  selectedEngineerId: number;

  @Input() buildingId: number;

  constructor(public activeModal: NgbActiveModal, private usersRepository: UsersRepository,
              private buildingsRepository: BuildingsRepository) {
  }

  ngOnInit(): void {
    this.usersRepository.getUsers().subscribe(users => {
      this.engineers = users;
    });
  }

  addEngineer(): void {
    if (this.selectedEngineerId) {
      this.buildingsRepository.addEngineerToBuilding(this.buildingId, +this.selectedEngineerId).subscribe(() => {
        this.activeModal.close();
      }, error => {
        console.error(error);
      });
    }
  }
}
