import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers/:id',
    data: { preload: true }, loadChildren: () => import('../app/customer/customer.module').then(m => m.CustomerModule)
  },
  { path: 'customers', loadChildren: () => import('../app/customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }

];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy }) ],
  exports: [ RouterModule ],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
