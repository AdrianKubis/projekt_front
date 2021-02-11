import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from '../core/interceptors/auth.interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from "../core/guards/auth.guard";

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'salaries',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../salaries/salaries.module').then((m) => m.SalariesModule)
      },
      {
        path: 'costs',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../costs/costs.module').then((m) => m.CostsModule)
      },
      {
        path: 'buildings',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../buildings/buildings.module').then((m) => m.BuildingsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  declarations: [
    RootComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CoreModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [RootComponent]
})
export class RootModule {
}
