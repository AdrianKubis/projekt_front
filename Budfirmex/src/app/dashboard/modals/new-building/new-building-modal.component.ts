import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../core/interfaces/user.interface';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { BuildingsRepository } from '../../../core/repositories/buildings.repository';

@Component({
  selector: 'app-new-building',
  templateUrl: 'new-building-modal.component.html',
  styleUrls: ['./new-building-modal.component.scss']
})

export class NewBuildingModalComponent implements OnInit {
  engineers: User[];
  model: any = {};

  constructor(public activeModal: NgbActiveModal,
              private usersRepository: UsersRepository,
              private buildingsRepository: BuildingsRepository) {
  }

  ngOnInit(): void {
    this.usersRepository.getUsers().subscribe(engineers => {
      this.engineers = engineers;
    });
  }

  createBuilding(): void {
    this.buildingsRepository.createBuilding(
      this.model.buildNumber,
      this.model.name,
      this.model.coordinates,
      this.model.plannedStartDate,
      this.model.plannedEndDate,
      this.model.engineersIds,
      this.model.supervisorId,
    ).subscribe(() => {
      this.activeModal.close();
    }, error => {
      console.error(error);
    });
  }
}
