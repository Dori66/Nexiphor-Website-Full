import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/dashboard/home/home.component";

const routes: Routes = [
  {
    path:'', component: DashboardComponent, children: [
      {
        path:'', redirectTo: 'home', pathMatch:'full'
      },
      {
        path:'home', component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
