import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HeaderComponent } from './countries/header/header.component';
import { SidebarComponent } from './countries/sidebar/sidebar.component';
import { ListComponent } from './countries/list/list.component';
import { CountryListComponent } from './countries/list/country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
