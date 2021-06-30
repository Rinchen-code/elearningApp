import { Component, OnInit } from '@angular/core';
import {AdminService} from "../service/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courseList;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.adminService.getCourses().subscribe( responseData => { debugger;
      this.courseList = responseData    });
  }

  removeCourse(id,  index) { debugger;
    this.adminService.deleteCourse(id).subscribe(res => {
      alert('Course deleted successfully');
        this.courseList.splice(index,1)
      });
  }

  editCourse(course) {
    const query = {id: course.id}
    this.router.navigate(['/admin/add-course'], {queryParams: query});
  }
}
