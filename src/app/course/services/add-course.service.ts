import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  courseUrl= "http://localhost:76/courses"
  constructor(private http:HttpClient) { }

  postCourse(data:Course):Observable<any>{ 
    return this.http.post<any>(this.courseUrl,data)
  }
  getCourse():Observable<Course[]>{ debugger
    return this.http.get<Course[]>(this.courseUrl)
  }
}
