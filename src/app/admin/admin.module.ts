import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import {AdminComponent} from "./admin.component";


@NgModule({
  declarations: [
    AddCourseComponent,
    UserListingComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
