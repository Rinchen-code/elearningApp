import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CourseListingComponent } from './course-listing/course-listing.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    UserListingComponent,
    AdminComponent,
    CourseListingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
