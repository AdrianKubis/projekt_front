import { Worker } from './worker.interface';
import { EquipmentDailyReport } from './equipment-daily-report.interface';

export interface OperatorWorkCard {
  id: number;
  dateOfWorkCard: Date;
  harmfulHours: number;
  timeOfBegin: Date;
  timeOfEnd: Date;
  worker: Worker;
  equipmentDailyReport: EquipmentDailyReport;
}
