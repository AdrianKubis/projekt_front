import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildingsRepository } from './repositories/buildings.repository';
import { DailyReportsRepository } from './repositories/daily-reports.repository';
import { AuthGuardService } from './guards/auth.guard';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [BuildingsRepository, DailyReportsRepository, AuthGuardService],
})
export class CoreModule {
}
