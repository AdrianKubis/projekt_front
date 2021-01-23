import { BrigadeDailyReport } from "./brigade-daily-report.interface";
import { Worker } from "./worker.interface";

export interface WorkCard {
  id:number;
  dateOfWorkCard: Date;
  harmfulHours: number;
  timeOfBegin: Date;
  timeOfEnd: Date;
  worker: Worker;
  brigadeDailyReport: BrigadeDailyReport;
}
