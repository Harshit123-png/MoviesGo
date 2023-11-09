import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { SingleMoviComponent } from './single-movi/single-movi.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SingleMoviComponent,
    TimeSelectionComponent,
    SeatSelectionComponent,
    PaymentComponent,
    SecondHeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
