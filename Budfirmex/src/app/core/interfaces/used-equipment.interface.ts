import { Worker } from './worker.interface';
import { Machine } from './machine.interface';

export interface UsedEquipment {
  id: number;
  machine: Machine;
  worker: Worker;
}
