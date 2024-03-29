// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {

  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {

    } else {
      return of(null);
    }
  }

}
