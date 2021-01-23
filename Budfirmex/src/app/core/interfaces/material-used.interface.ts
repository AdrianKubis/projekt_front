import { BrigadeDailyReport } from "./brigade-daily-report.interface";
import { Material } from "./material.interface";

export interface MaterialUsed {
  id: number;
  quantity: number;
  brigadeDailyReport: BrigadeDailyReport;
  material: Material;
}

