import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveCourseService {
  courseUrl="http://localhost:76/courses"

  constructor(private http:HttpClient) { }

  deleteCourse(id:number):Observable<void>{
    return this.http.delete<any>(this.courseUrl+'/'+id)
  }
}