import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildingsRepository } from './repositories/buildings.repository';
import { DailyReportsRepository } from './repositories/daily-reports.repository';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [BuildingsRepository, DailyReportsRepository],
})
export class CoreModule {
}
