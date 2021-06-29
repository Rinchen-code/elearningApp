import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../services/add-course.service';
// import { Course } from '../course';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  
  courseForm: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private addCourseService: AddCourseService
    ) { }

  ngOnInit(): void {
    this.createCourseForm()
  }

  createCourseForm(){
    this.courseForm = this.formBuilder.group({
      id:[undefined],
      courseName:[undefined],
      agenda:[undefined],
      imageUrl:[undefined],
      tutor:[undefined],
      description:[undefined],
      price:[undefined]
    })
  }
  addCourse() { debugger
    this.addCourseService.postCourse(this.courseForm.value).subscribe(res => {
      this.courseForm.reset()
    })
   
  }

}
