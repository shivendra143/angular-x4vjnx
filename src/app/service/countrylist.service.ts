import { Injectable } from '@angular/core';
import { Country } from '../countries/country.model';
import { Currency } from '../shared/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {

  constructor() { }

  private country: Country[] = [
    new Country(
      "A Test Recipe",
      "This is simply a test",
      [
        new Currency('Meat',"sdsds","$"),
        new Currency('French Fries',"sdsdsd", "&")]
    ),
    new Country(
      "A Test Recipe",
      "This is simply a test",
      [new Currency('Meat',"sdsds","$"), new Currency('French Fries',"sdsdsd", "&")]
    )

  ];

  getCountries() {
    return this.country.slice();
  }

  getCountriesById(id: number): Country {
    return this.country[id];
  }
}
