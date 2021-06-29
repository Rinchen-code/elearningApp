import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/loing/login/login.component';
import { SignupComponent } from './home/signup/signup/signup.component';
import { CourseComponent } from './course/course.component';
import { BioComponent } from './course/bio/bio.component';
import { ChemistryComponent } from './course/chemistry/chemistry.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CourseComponent,
    BioComponent,
    ChemistryComponent,
    AboutUsComponent,
    AddCourseComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
