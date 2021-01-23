import { BrigadeDailyReport } from "./brigade-daily-report.interface";
import { LabourNorm } from "./labour-norm.interface";
import { QualityEvaluation } from "./quality-evaluation.interface";

export interface DoneWork{
    id:number;
    quantityOfWork: number;
    brigadeDailyReport: BrigadeDailyReport;
    labourNorm: LabourNorm;
    qualityEvaluation: QualityEvaluation;
}
