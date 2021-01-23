import { User } from "./user.interface";

export interface Building {
  id: number;
  buildingNumber: string;
  name: string;
  coordinates: string;
  plannedStartDate: Date;
  realStartDate?: Date;
  plannedEndDate: Date;
  realEndDate?: Date;
  engineers: User[];
  supervisor: User;
}
