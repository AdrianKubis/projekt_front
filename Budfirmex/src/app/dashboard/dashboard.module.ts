import { NgModule } from '@angular/core';
import { MyBuildingsComponent } from './components/my-buildings/my-buildings.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewBuildingModalComponent } from './modals/new-building/new-building-modal.component';
import { RouterModule } from '@angular/router';


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
  imports: [RouterModule.forChild(routes)],
  declarations: [DashboardComponent, MyBuildingsComponent, UserDetailsComponent, NewBuildingModalComponent],
  exports: [],
  providers: [],
})
export class DashboardModule {
}
