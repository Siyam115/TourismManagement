import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { CustomermanagementComponent } from './components/customermanagement/customermanagement.component';
import { OnlinepaymentComponent } from './components/onlinepayment/onlinepayment.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { RevenueComponent } from './components/revenue/revenue.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    NavbarComponent,
    BookingsComponent,
    OffersComponent,
    CustomersfeedbackComponent,
   AllPackagesComponent,
    DestinationComponent,
    BookcreateComponent,
    BooklistComponent,
    PaymentcreateComponent,
    PaymentlistComponent,
    TravelblogComponent,
    PackagedetailsComponent,
    Dashboard1Component,
    CustomermanagementComponent,
    OnlinepaymentComponent,
    DashboardLayoutComponent,
    DestinationDetailsComponent,
    RevenueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
