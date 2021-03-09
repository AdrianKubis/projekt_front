import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkersSalariesComponent } from './components/workers-salaries/workers-salaries.component';
import { SelectWorkersModalComponent } from './modals/select-workers-modal/select-workers-modal.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatButtonModule } from '@angular/material/button';

const routes = [
  {
    path: '',
    component: SalariesComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [WorkersSalariesComponent, SelectWorkersModalComponent, SalariesComponent, UserDetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SalariesModule { }
