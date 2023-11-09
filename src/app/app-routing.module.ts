import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMoviComponent } from './single-movi/single-movi.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path:'single/:id',
    component: SingleMoviComponent,
    pathMatch: 'full'
  },
  {
    path:'time/:id',
    component: TimeSelectionComponent,
    pathMatch: 'full'
  },
  {
    path:'seat',
    component: SeatSelectionComponent,
    pathMatch: 'full'
  },
  {
    path:'payment',
    component: PaymentComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
