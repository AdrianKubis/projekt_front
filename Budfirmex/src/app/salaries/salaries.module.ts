import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkersSalariesComponent } from './components/workers-salaries/workers-salaries.component';
import { SelectWorkersModalComponent } from './modals/select-workers-modal/select-workers-modal.component';
import { SalariesComponent } from './pages/salaries/salaries.component';

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
  declarations: [WorkersSalariesComponent, SelectWorkersModalComponent, SalariesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SalariesModule { }
