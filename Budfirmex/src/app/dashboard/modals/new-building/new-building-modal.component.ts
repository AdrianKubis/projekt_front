import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../core/interfaces/user.interface';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { BuildingsRepository } from '../../../core/repositories/buildings.repository';
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: 'app-new-building',
  templateUrl: 'new-building-modal.component.html',
  styleUrls: ['./new-building-modal.component.scss']
})

export class NewBuildingModalComponent implements OnInit {
  engineers: User[];
  model: any = {};
  supervisor: User;

  constructor(public activeModal: NgbActiveModal,
              private usersRepository: UsersRepository,
              private buildingsRepository: BuildingsRepository,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.usersRepository.getUsers().subscribe(engineers => {
      this.engineers = engineers;
    });
    this.usersRepository.getLoggedInUser().subscribe(user => {
      this.supervisor = user;
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
      this.supervisor.id,
    ).subscribe(() => {
      this.activeModal.close();
    }, error => {
      console.error(error);
    });
  }
}
