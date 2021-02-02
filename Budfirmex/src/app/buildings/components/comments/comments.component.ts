import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/core/interfaces/comments.interface';
import { BuildingDailyReport } from "../../../core/interfaces/building-daily-report.interface";

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent {
  @Input() buildingDailyReport: BuildingDailyReport;
  @Input() comments: Comment[];
  @Output() refreshData = new EventEmitter<void>();
}
