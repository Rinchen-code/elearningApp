import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  usersUrl = 'http://localhost:3000/users';
  coursesUrl = 'http://localhost:3000/courses'
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

  updateUser(user) {
    return this.httpClient.put(`${this.usersUrl}/${user.id}`, user);
  }

  addCourses(courses) {
    return this.httpClient.post(this.coursesUrl, courses);
  }

  updateCourses(courses) {
    return this.httpClient.put(`${this.coursesUrl}/${courses.id}`, courses)
  }

  getCourses() {
    return this.httpClient.get(this.coursesUrl);
  }

  getOneCourse(id) {
    return this.httpClient.get(`${this.coursesUrl}/${id}`)
  }

  deleteCourse(id) {
    return this.httpClient.delete(`${this.coursesUrl}/${id}`)
  }
}
