import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionCostsComponent } from './components/construction-costs/construction-costs.component';
import { CostsComponent } from './pages/costs/costs.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: CostsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];


@NgModule({
  declarations: [ConstructionCostsComponent, CostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class CostsModule { }
