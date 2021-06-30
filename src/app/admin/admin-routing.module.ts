import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {UserListingComponent} from "./user-listing/user-listing.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {CourseListingComponent} from "./course-listing/course-listing.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'user-list',
    component: UserListingComponent
  },
  {
    path: 'add-course',
    component: AddCourseComponent
  },
  {
    path: 'course-list',
    component: CourseListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
