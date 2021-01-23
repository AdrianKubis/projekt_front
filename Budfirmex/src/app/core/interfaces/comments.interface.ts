import { User } from "./user.interface";

export interface Comment {
  id: number;
  comment: string;
  commentNumber: string;
  author: User;
}
