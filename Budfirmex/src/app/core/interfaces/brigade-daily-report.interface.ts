import { BuildingDailyReport } from "./building-daily-report.interface";
import { User } from "./user.interface";

export interface BrigadeDailyReport {
    id:number;
    buildingDailyReport: BuildingDailyReport;
    date:Date;
    author: User;
    reportNumber: string;
}
