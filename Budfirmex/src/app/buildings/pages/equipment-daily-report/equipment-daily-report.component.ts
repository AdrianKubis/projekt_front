import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../core/interfaces/breadcrumb.interface';
import { EquipmentDailyReport } from '../../../core/interfaces/equipment-daily-report.interface';
import { ActivatedRoute } from '@angular/router';
import { EquipmentDailyReportsRepository } from '../../../core/repositories/equipment-daily-reports.repository';
import { UsedEquipment } from '../../../core/interfaces/used-equipment.interface';
import { OperatorWorkCard } from '../../../core/interfaces/operator-work-card.interface';

@Component({
  selector: 'app-equipment-daily-report-page',
  templateUrl: './equipment-daily-report.component.html',
  styleUrls: ['equipment-daily-report.component.scss']
})

export class EquipmentDailyReportComponent implements OnInit {
  breadcrumbs: Breadcrumb[];
  equipmentDailyReport: EquipmentDailyReport;
  usedEquipments: UsedEquipment[];
  operatorsWorkCards: OperatorWorkCard[];
  equipmentDailyReportId: number;

  constructor(private equipmentDailyReportsRepository: EquipmentDailyReportsRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.equipmentDailyReportId = +(this.route.snapshot.paramMap.get('reportId') + '');

    this.equipmentDailyReportsRepository.getEquipmentDailyReport(this.equipmentDailyReportId).subscribe(equipmentDailyReport => {
      this.equipmentDailyReport = equipmentDailyReport;
      this.breadcrumbs = this.generateBreadcrumbs();
    });

    this.equipmentDailyReportsRepository.getUsedEquipments(this.equipmentDailyReportId).subscribe(usedEquipments => {
      this.usedEquipments = usedEquipments;
    });

    this.equipmentDailyReportsRepository.getOperatorsWorkCards(this.equipmentDailyReportId).subscribe(operatorsWorkCards => {
      this.operatorsWorkCards = operatorsWorkCards;
    });


  }

  generateBreadcrumbs(): Breadcrumb[] {
    return [
      {name: 'Budowa', link: `/buildings/${this.equipmentDailyReport.buildingDailyReport.building.id}`},
      {
        name: 'Raport dzienny budowy',
        link: `/buildings/${this.equipmentDailyReport.buildingDailyReport.building.id}/daily-report/${this.equipmentDailyReport.id}`
      },
      {name: 'Raport dzienny pracy sprzętu'}
    ];
  }
}
