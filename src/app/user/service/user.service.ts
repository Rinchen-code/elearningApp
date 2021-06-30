import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  coursesUrl = 'http://localhost:3000/courses'

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get(this.coursesUrl);
  }
}
