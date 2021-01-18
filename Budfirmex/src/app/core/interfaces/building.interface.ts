export interface Building {
  name: string;
  description: string;
  coordinates: string;
  plannedStartDate: Date;
  plannedEndDate: Date;
  dailyWorkReports: any[];
  constructionSiteId: string;

  dateOfFinish: Date;
  supervisor?: string;
  engineers?: string[];
}
