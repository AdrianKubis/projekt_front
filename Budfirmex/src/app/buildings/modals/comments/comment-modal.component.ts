import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BuildingsDailyReportsRepository } from '../../../core/repositories/buildings-daily-reports.repository';
import { UsersRepository } from '../../../core/repositories/users.repository';
import { User } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-comment-modal',
  templateUrl: 'comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})

export class CommentModalComponent implements OnInit {
  @Input() buildingDailyReportId: number;
  loggedInUser: User;
  model: any = {};
  private modal: NgbModalRef;
  @Output() refreshData = new EventEmitter<void>();

  constructor(private modalService: NgbModal,
              private usersRepository: UsersRepository,
              private buildingsDailyReportsRepository: BuildingsDailyReportsRepository) {
  }

  ngOnInit(): void {
    this.usersRepository.getLoggedInUser().subscribe(response => {
      this.loggedInUser = response;
    });
  }

  createComment(): void {
    this.buildingsDailyReportsRepository.createComment(this.buildingDailyReportId, this.model.comment, this.model.commentNumber, this.loggedInUser.id).subscribe(() => {
      this.modal.close();
      this.refreshData.emit();
    }, error => {
      console.error(error);
    });
  }

  open(content: any): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
