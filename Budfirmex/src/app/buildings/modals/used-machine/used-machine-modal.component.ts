import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Machine } from '../../../core/interfaces/machine.interface';
import { MachinesRepository } from '../../../core/repositories/machines.repository';

@Component({
  selector: 'app-used-machine-modal',
  templateUrl: './used-machine-modal.component.html',
  styleUrls: ['used-machine-modal.component.scss']
})

export class UsedMachineModalComponent implements OnInit{
  closeResult = '';
  machines: Machine[];
  selectedMachine: Machine;
  model: any = {};

  constructor(private modalService: NgbModal, private machinesRepository: MachinesRepository) {
  }

  ngOnInit(): void {
    this.machinesRepository.getMachines().subscribe(machines => {
      this.machines = machines;
    });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
