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
import { MachineReportsComponent } from './components/machine-reports/machine-reports.component';
import { CommentsComponent } from './components/comments/comments.component';
import { WorkersComponent } from './components/workers/workers.component';
import { WorksComponent } from './components/works/works.component';
import { StuffComponent } from './components/stuff/stuff.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

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
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, CommonModule],
  declarations: [
    BuildingDetailsComponent,
    BuildingPersonnelComponent,
    BrigadeReportComponent,
    BuildingComponent,
    DailyReportComponent,
    MachinesReportComponent,
    CommentModalComponent,
    MachineModalComponent,
    OperatorModalComponent,
    StuffModalComponent,
    WorkModalComponent,
    WorkerModalComponent,
    DailyReportsComponent,
    ReportDetailsComponent,
    BrigadeReportsComponent,
    MachineReportsComponent,
    CommentsComponent,
    StuffComponent,
    WorkersComponent,
    WorksComponent,
    OperatorsComponent,
    MachinesComponent
  ],
  exports: [],
  providers: [],
})
export class BuildingsModule {
}
