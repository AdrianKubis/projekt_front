import { Building } from "./building.interface";

export interface Costs {
  id: number;
  workersCost: number;
  equipmentCost: number;
  materialCost: number;
  monthlyCost: number;
  totalCost: number;
  date: Date;
  building: Building;
}
