import { Component } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-registration-modal',
  templateUrl: 'registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})

export class RegistrationModalComponent {
  closeResult = '';
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isVerified: boolean;

  constructor(private modalService: NgbModal, private authService: AuthService, public activeModal: NgbActiveModal) {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  verifyToken(token: string): void {
    this.authService.verifyToken(token).subscribe(() => {
      this.isVerified = true;
    }, error => {
      console.error(error);
    });
  }
}
