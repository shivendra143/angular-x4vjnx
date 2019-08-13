import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './countries/list/list.component';
import { SidebarComponent } from './countries/sidebar/sidebar.component';


const routes: Routes = [
        { path: "", redirectTo: "countries", pathMatch: "full" },
        {
          path: "countries",
          component: ListComponent,
          children: [
            { path: ":id", component: SidebarComponent },
          ]
        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
