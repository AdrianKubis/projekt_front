import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BreadcrumbsComponent } from './components/breadcrumb/breadcrumbs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbsComponent,
    ButtonComponent,
    UserProfileComponent
  ],
  exports: [
    BreadcrumbsComponent,
    ButtonComponent,
    UserProfileComponent
  ],
  providers: [],
})
export class SharedModule {
}
