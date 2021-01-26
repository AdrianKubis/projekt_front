import { BuildingDailyReport } from './building-daily-report.interface';
import { User } from './user.interface';
import { Machine } from './machine.interface';
import { Worker } from './worker.interface';

export interface EquipmentDailyReport {
  id: number;
  buildingDailyReport: BuildingDailyReport;
  date: Date;
  author: User;
  reportNumber: string;
  work: string;
  machine: Machine;
  worker: Worker;
}
