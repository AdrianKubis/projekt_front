import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildingsRepository } from './repositories/buildings.repository';
import { BuildingsDailyReportsRepository } from './repositories/buildings-daily-reports.repository';
import { AuthGuardService } from './guards/auth.guard';
import { UsersRepository } from './repositories/users.repository';
import { BrigadesDailyReportsRepository } from './repositories/brigades-daily-reports.repository';
import { MachinesRepository } from './repositories/machines.repository';
import { MaterialsRepository } from './repositories/materials.repository';
import { WorkersRepository } from './repositories/workers.repository';
import { WorksRepository } from './repositories/works.repository';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [
    AuthGuardService,
    BrigadesDailyReportsRepository,
    BuildingsRepository,
    BuildingsDailyReportsRepository,
    MachinesRepository,
    MaterialsRepository,
    UsersRepository,
    WorkersRepository,
    WorksRepository
  ],
})
export class CoreModule {
}
