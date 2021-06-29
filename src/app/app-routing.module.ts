import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/loing/login/login.component'; 
import { SignupComponent } from './home/signup/signup/signup.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  // {
  //   path:"Home",
  //   component:HomeComponent
  // },
  {
    path:"Course",
    component:CourseComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"Signup",
    component:SignupComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"navAdmin",
    component:AdminDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
