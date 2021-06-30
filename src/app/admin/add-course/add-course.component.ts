import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdminService} from "../service/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm;
  edit;

  constructor(
    private builder: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.createCourseForm();
    this.getCourseId();
  }

  getCourseId() {
    this.activateRoute.queryParamMap.subscribe(response => { debugger;
      const courseId = response.get('id');
      this.edit = courseId ? true : false;
      courseId && this.adminService.getOneCourse(courseId).subscribe( response => {
        response && this.courseForm.patchValue(response);
      })
    })
  }

  createCourseForm() {
    this.courseForm = this.builder.group({
      id: [''],
      courseName: [undefined, Validators.required],
      agenda: [undefined, Validators.required],
      imageUrl: [undefined, Validators.required],
      tutor: [undefined, Validators.required],
      description: [undefined, Validators.required],
      price: [undefined, Validators.required]
    })
  }

  addCourse() {
    this.adminService.addCourses(this.courseForm.value).subscribe(res => {
      this.router.navigateByUrl('/admin/course-list');
      alert('Course added successfully.');
      this.courseForm.reset();
    });
  }

  EditCourse() {
    this.adminService.updateCourses(this.courseForm.value).subscribe(res => {
      this.router.navigateByUrl('/admin/course-list');
      alert('Course updated successfully.');
      this.courseForm.reset();
    })
  }



}
