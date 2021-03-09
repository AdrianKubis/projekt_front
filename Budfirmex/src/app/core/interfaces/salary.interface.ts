import { Worker } from "./worker.interface";

export interface Salary {
    idSalary: number;
    overtimeSalary: number;
    harmfulHoursSalary: number;
    nightHoursSalary: number;
    hoursSalary: number;
    amountSalary: number;
    date: Date;
    worker: Worker;
}
