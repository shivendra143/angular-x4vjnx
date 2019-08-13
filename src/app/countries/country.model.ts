import { Currency } from '../shared/currency.model';

export class Country {
  public name: string;
  public capital: string;
  public currency: Currency[];

  constructor(name: string, desc: string, imgPath: string, currency: Currency[]) {
    this.name = name;
    this.capital = desc;
    this.currency = currency;
  }
}
