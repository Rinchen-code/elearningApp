import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdminService} from "../service/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm;

  constructor(
    private builder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createCourseForm();
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
    debugger
    this.adminService.addCourses(this.courseForm.value).subscribe(res => {
      this.router.navigateByUrl('/admin/course-list');
      alert('Course added successfully.');
      this.courseForm.reset();
    });
  }



}
