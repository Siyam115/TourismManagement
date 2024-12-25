import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'',redirectTo:'log-in',pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'log-in',component:LoginComponent, children: [
    {path:'sign-up',component:SignupComponent}
  ]},
  {path:'sign-up',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'navbar',component:NavbarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
