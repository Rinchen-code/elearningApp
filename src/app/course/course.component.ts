import { Component, OnInit } from '@angular/core';
import { AddCourseService } from './services/add-course.service';
import { RemoveCourseService } from './services/remove-course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseList = []
  constructor(private addCourse: AddCourseService, private removeCourseService:RemoveCourseService) { }

  ngOnInit(): void {
    this.displayCourses()
   
  }

  displayCourses(){ debugger
    this.addCourse.getCourse().subscribe((course) => {
      this.courseList = course
      console.log(this.courseList)
    })
  }

  removeCourse(id){
    this.removeCourseService.deleteCourse(id).subscribe(res => {
      this.courseList.splice(id);
      this.displayCourses()
    })
  }

}
