import { NgModule } from '@angular/core';
import { MyBuildingsComponent } from './components/my-buildings/my-buildings.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewBuildingModalComponent } from './modals/new-building/new-building-modal.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

const routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatTabsModule, SharedModule, MatButtonModule, CommonModule, FormsModule],
  declarations: [DashboardComponent, MyBuildingsComponent, UserDetailsComponent, NewBuildingModalComponent],
  exports: [],
  providers: [],
})
export class DashboardModule {
}
