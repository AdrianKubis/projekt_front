import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildingsRepository } from './repositories/buildings.repository';
import { BuildingsDailyReportsRepository } from './repositories/buildings-daily-reports.repository';
import { AuthGuardService } from './guards/auth.guard';
import { UsersRepository } from './repositories/users.repository';
import { BrigadesDailyReportsRepository } from './repositories/brigades-daily-reports.repository';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [BuildingsRepository, BrigadesDailyReportsRepository, BuildingsDailyReportsRepository, AuthGuardService, UsersRepository],
})
export class CoreModule {
}
