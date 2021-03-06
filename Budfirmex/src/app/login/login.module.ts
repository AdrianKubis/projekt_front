import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrationModalComponent } from './modals/registration/registration-modal.component';
import { RemindPasswordModalComponent } from './modals/remind-password/remind-password-modal.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

const routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, CommonModule, CoreModule, SharedModule],
  declarations: [
    LoginComponent,
    LoginPageComponent,
    RegistrationModalComponent,
    RemindPasswordModalComponent
  ],
  exports: [],
  providers: [],
})
export class LoginModule {
}
