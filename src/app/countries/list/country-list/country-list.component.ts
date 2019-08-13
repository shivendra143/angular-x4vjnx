import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() country: Country;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
