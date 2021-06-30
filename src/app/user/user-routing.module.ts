import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component";
import {UserCourseComponent} from "./user-course/user-course.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-course',
    component: UserCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
