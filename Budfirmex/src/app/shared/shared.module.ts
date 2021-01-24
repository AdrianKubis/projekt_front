import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BreadcrumbsComponent } from './components/breadcrumb/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MustMatchDirective } from './validators/must-match.validator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbsComponent,
    ButtonComponent,
    UserProfileComponent,
    MustMatchDirective
  ],
  exports: [
    BreadcrumbsComponent,
    ButtonComponent,
    UserProfileComponent,
    MustMatchDirective
  ],
  providers: [],
})
export class SharedModule {
}
