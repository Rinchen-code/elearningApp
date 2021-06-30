import { Component, OnInit } from '@angular/core';
import {AdminService} from "../service/admin.service";

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courseList;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.adminService.getCourses().subscribe( responseData => {
      this.courseList = responseData    });
  }
  removeCourse(id) {
    this.adminService.deleteCourse(id).subscribe(res => {
      this.courseList.splice(id);
      // this.displayCourses()
    })
  }
}
