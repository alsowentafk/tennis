import {User} from '../Models/User';

export class Response {
  status: number;
  message: string;
  email: string;
  user: User;
}
