import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpClass } from '../sign-up-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
userUrl="http://localhost:76/user"
  constructor(private http:HttpClient) { }

  postSignup(data:SignUpClass):Observable<any>{
    return this.http.post<any>(this.userUrl,data)
  }
  getSignup():Observable<SignUpClass[]>{ debugger
    return this.http.get<SignUpClass[]>(this.userUrl)
  }
}
