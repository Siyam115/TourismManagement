import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { OffersComponent } from './components/offers/offers.component';
import { CustomersfeedbackComponent } from './components/customersfeedback/customersfeedback.component';

import { DestinationComponent } from './components/destination/destination.component';
import { AllPackagesComponent } from './components/allpackages/allpackages.component';
import { BookcreateComponent } from './components/bookcreate/bookcreate.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { PaymentcreateComponent } from './components/paymentcreate/paymentcreate.component';
import { PaymentlistComponent } from './components/paymentlist/paymentlist.component';
import { TravelblogComponent } from './components/travelblog/travelblog.component';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { CustomermanagementComponent } from './components/customermanagement/customermanagement.component';
import { OnlinepaymentComponent } from './components/onlinepayment/onlinepayment.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'log-in',component:LoginComponent, children: [
    {path:'sign-up',component:SignupComponent}
  ]},
  {path:'sign-up',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'book',component:BookingsComponent},
  {path:'offer',component:OffersComponent},
  {path:'cfd',component:CustomersfeedbackComponent},
  {path:'allpack',component:AllPackagesComponent},
  {path:'destination',component:DestinationComponent},
  {path:'bookcreate',component:BookcreateComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'paymentcreate',component:PaymentcreateComponent},
  {path:'paymentlist',component:PaymentlistComponent},
  {path:'travelblog',component:TravelblogComponent},
  {path:'packagedetails',component:PackagedetailsComponent},
  {path:'dash1',component:Dashboard1Component, children:[
    {path:'book',component:BookingsComponent},
    {path:'customer-mangement',component:CustomermanagementComponent},
  ]},
  {path:'customer-mangement',component:CustomermanagementComponent},
  {path:'online-payment',component:OnlinepaymentComponent},
  {path:'destination-details',component:DestinationDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
