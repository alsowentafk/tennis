export class TournamentUser {
    id: number;
    tournament_id: number;
    user_id: number;
    birth_certificate: number;
    pay_certificate: number;
    is_confirmed: boolean

  constructor(birth_certificate: number, pay_certificate: number) {
    this.birth_certificate = birth_certificate;
    this.pay_certificate = pay_certificate;
  }
}
