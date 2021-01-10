import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildingsRepository } from './repositories/buildings.repository';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [BuildingsRepository],
})
export class CoreModule {
}
