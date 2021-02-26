import { Component, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from '../../../core/interfaces/role.interface';
import { UsersRepository } from '../../../core/repositories/users.repository';

@Component({
  selector: 'app-registration-modal',
  templateUrl: 'registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})

export class RegistrationModalComponent {
  model: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  isVerified: boolean;
  roles: Role[];
  error: any;

  constructor(private modalService: NgbModal, private authService: AuthService, public activeModal: NgbActiveModal) {
  }

  onSubmit(): void {
    this.error = null;
    this.authService.register(this.model).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.error = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  verifyToken(token: string): void {
    this.error = null;
    this.authService.verifyToken(token).subscribe(() => {
      this.isVerified = true;
    }, error => {
      this.error = error;
      console.error(error);
    });
  }


}
