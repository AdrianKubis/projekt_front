import { BuildingDailyReport } from "./building-daily-report.interface";
import { User } from "./user.interface";

export interface EquipmentDailyReport {
    id:number;
    buildingDailyReport: BuildingDailyReport;
    date:Date;
    author: User;
    reportNumber: string;
    work: string;
}
