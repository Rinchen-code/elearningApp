import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserCourseComponent } from './user-course/user-course.component';
import {UserComponent} from "./user.component";


@NgModule({
  declarations: [
    UserCourseComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
