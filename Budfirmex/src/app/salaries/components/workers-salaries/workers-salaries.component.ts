import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Salary } from '../../../core/interfaces/salary.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectWorkersModalComponent } from '../../modals/select-workers-modal/select-workers-modal.component';

@Component({
  selector: 'app-workers-salaries',
  templateUrl: './workers-salaries.component.html',
  styleUrls: ['./workers-salaries.component.scss']
})
export class WorkersSalariesComponent {
  @Input() salary: Salary[];
  @Output() refreshSalaries = new EventEmitter<void>();

  constructor(private modalService: NgbModal) { }

  openSelectWorkersModal(): void {
    this.modalService.open(SelectWorkersModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
    this.refreshSalaries.emit();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
