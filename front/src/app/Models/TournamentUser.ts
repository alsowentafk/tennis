import {Tournament} from './Tournament';
import {User} from './User';

export class TournamentUser {
    id: number;
    tournament_id: Tournament;
    user_id: User;
    birth_certificate: string;
    pay_certificate: string;
    is_confirmed: boolean;

  constructor(birth_certificate: string, pay_certificate: string) {
    this.birth_certificate = birth_certificate;
    this.pay_certificate = pay_certificate;
  }
}
