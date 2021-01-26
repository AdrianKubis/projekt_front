import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../core/interfaces/user.interface';
import { UsersRepository } from '../../../core/repositories/users.repository';

@Component({
  selector: 'app-new-building',
  templateUrl: 'new-building-modal.component.html',
  styleUrls: ['./new-building-modal.component.scss']
})

export class NewBuildingModalComponent implements OnInit {
  engineers: User[];

  constructor(public activeModal: NgbActiveModal, private usersRepository: UsersRepository) {
  }

  ngOnInit(): void {
    this.usersRepository.getUsers().subscribe(engineers => {
      this.engineers = engineers;
    });
  }
}
