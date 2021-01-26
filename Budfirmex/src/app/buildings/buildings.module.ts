import { NgModule } from '@angular/core';
import { BrigadeReportComponent } from './pages/brigade-report/brigade-report.component';
import { DailyReportComponent } from './pages/daily-report/daily-report.component';
import { MachinesReportComponent } from './pages/machines-report/machines-report.component';
import { BuildingDetailsComponent } from './components/building-details/building-details.component';
import { BuildingPersonnelComponent } from './components/building-personnel/building-personnel.component';
import { RouterModule } from '@angular/router';
import { BuildingComponent } from './pages/building/building.component';
import { CommentModalComponent } from './modals/comments/comment-modal.component';
import { StuffModalComponent } from './modals/stuff/stuff-modal.component';
import { WorkModalComponent } from './modals/work/work-modal.component';
import { WorkerModalComponent } from './modals/worker/worker-modal.component';
import { MachineModalComponent } from './modals/machine/machine-modal.component';
import { OperatorModalComponent } from './modals/operator/operator-modal.component';
import { DailyReportsComponent } from './components/daily-reports/daily-reports.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { BrigadeReportsComponent } from './components/brigade-reports/brigade-reports.component';
import { EquipmentDailyReportsComponent } from './components/equipment-daily-reports/equipment-daily-reports.component';
import { CommentsComponent } from './components/comments/comments.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DoneWorksComponent } from './components/done-works/done-works.component';
import { MaterialUsedComponent } from './components/materials-used/material-used.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { MachinesComponent } from './components/machines/machines.component';
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
                component: DailyReportComponent,
              },
              {
                path: 'brigade-report/:brigadeId',
                component: BrigadeReportComponent
              },
              {
                path: 'machines-report/:machineId',
                component: MachinesReportComponent
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
    BrigadeReportComponent,
    BuildingComponent,
    DailyReportComponent,
    MachinesReportComponent,
    CommentModalComponent,
    EngineerModalComponent,
    MachineModalComponent,
    OperatorModalComponent,
    StuffModalComponent,
    WorkModalComponent,
    WorkerModalComponent,
    DailyReportsComponent,
    ReportDetailsComponent,
    BrigadeReportsComponent,
    EquipmentDailyReportsComponent,
    CommentsComponent,
    MaterialUsedComponent,
    WorkersComponent,
    DoneWorksComponent,
    OperatorsComponent,
    MachinesComponent
  ],
  exports: [],
  providers: [],
})
export class BuildingsModule {
}
