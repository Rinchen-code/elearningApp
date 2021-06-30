import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent implements OnInit {
  coursesList;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.userService.getCourses().subscribe(response => {
      this.coursesList = response;
    })
  }

}
