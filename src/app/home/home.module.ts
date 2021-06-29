import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LoginComponent} from "./loing/login/login.component";
import {SignupComponent} from "./signup/signup/signup.component";


@NgModule({
  declarations: [LoginComponent, SignupComponent, Ser],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
