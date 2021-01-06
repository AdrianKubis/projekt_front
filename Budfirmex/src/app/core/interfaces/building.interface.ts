export interface Building {
  buildingNumber: string;
  roadName: string;
  dateOfStart: Date;
  plannedDateOfFinish: Date;
  dateOfFinish?: Date;
  supervisor: string;
  engineers: string[];
}
