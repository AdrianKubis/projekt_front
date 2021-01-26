import { Worker } from './worker.interface';
import { Machine } from './machine.interface';

export interface UsedEquipment {
  machine: Machine;
  worker: Worker;
}
