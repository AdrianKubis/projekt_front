import { NgModule } from '@angular/core';
import { BrigadeDailyReportComponent } from './pages/brigade-daily-report/brigade-daily-report.component';
import { BuildingDailyReportComponent } from './pages/building-daily-report/building-daily-report.component';
import { EquipmentDailyReportComponent } from './pages/equipment-daily-report/equipment-daily-report.component';
import { BuildingDetailsComponent } from './components/building-details/building-details.component';
import { BuildingPersonnelComponent } from './components/building-personnel/building-personnel.component';
import { RouterModule } from '@angular/router';
import { BuildingComponent } from './pages/building/building.component';
import { CommentModalComponent } from './modals/comments/comment-modal.component';
import { MaterialsUsedModalComponent } from './modals/materials-used/materials-used-modal.component';
import { DoneWorkModalComponent } from './modals/done-work/done-work-modal.component';
import { WorkerModalComponent } from './modals/worker/worker-modal.component';
import { UsedMachineModalComponent } from './modals/used-machine/used-machine-modal.component';
import { OperatorWorkCardModalComponent } from './modals/operator-work-card/operator-work-card-modal.component';
import { DailyReportsComponent } from './components/daily-reports/daily-reports.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { BrigadeReportsComponent } from './components/brigade-reports/brigade-reports.component';
import { EquipmentDailyReportsComponent } from './components/equipment-daily-reports/equipment-daily-reports.component';
import { CommentsComponent } from './components/comments/comments.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DoneWorksComponent } from './components/done-works/done-works.component';
import { MaterialUsedComponent } from './components/materials-used/material-used.component';
import { OperatorsWorkCardsComponent } from './components/operators-work-cards/operators-work-cards.component';
import { UsedEquipmentsComponent } from './components/used-equipments/used-equipments.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { EngineerModalComponent } from './modals/engineer/engineer-modal.component';
import { FormsModule } from '@angular/forms';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

const routes = [
  {
    path: ':buildingId',
    children: [
      {
        path: '',
        component: BuildingComponent,
      },
      {
        path: 'daily-report',
        children: [
          {
            path: ':reportId',
            children: [
              {
                path: '',
                component: BuildingDailyReportComponent,
              },
              {
                path: 'brigade-report/:brigadeId',
                component: BrigadeDailyReportComponent
              },
              {
                path: 'machines-report/:machineReportId',
                component: EquipmentDailyReportComponent
              }
            ]
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, CommonModule, MatTabsModule, FullCalendarModule, FormsModule],
  declarations: [
    BuildingDetailsComponent,
    BuildingPersonnelComponent,
    BrigadeDailyReportComponent,
    BuildingComponent,
    BuildingDailyReportComponent,
    EquipmentDailyReportComponent,
    CommentModalComponent,
    EngineerModalComponent,
    UsedMachineModalComponent,
    OperatorWorkCardModalComponent,
    MaterialsUsedModalComponent,
    DoneWorkModalComponent,
    WorkerModalComponent,
    DailyReportsComponent,
    ReportDetailsComponent,
    BrigadeReportsComponent,
    EquipmentDailyReportsComponent,
    CommentsComponent,
    MaterialUsedComponent,
    WorkersComponent,
    DoneWorksComponent,
    OperatorsWorkCardsComponent,
    UsedEquipmentsComponent
  ],
  exports: [],
  providers: [],
})
export class BuildingsModule {
}
