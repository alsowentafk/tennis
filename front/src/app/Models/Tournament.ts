export class Tournament {
  id: number;
  name: string;
  regulations: string;
  date_start: Date;
  date_close_reg: Date;
  date_cancel_reg: Date;

  constructor(name: string, regulations: string, date_start: Date, date_close_reg: Date, date_cancel_reg: Date) {
    this.name = name;
    this.regulations = regulations;
    this.date_start = date_start;
    this.date_close_reg = date_close_reg;
    this.date_cancel_reg = date_cancel_reg;
  }
}
