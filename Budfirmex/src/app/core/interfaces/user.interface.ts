import { Role } from './role.interface';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  phoneNumber: string;
  permissionNumber: string;
  role: Role[];
}
