import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountrylistService } from '../../service/countrylist.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  country: Country[] = [];
  constructor(
    private countryService: CountrylistService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.country = this.countryService.getCountries();
  }

}
