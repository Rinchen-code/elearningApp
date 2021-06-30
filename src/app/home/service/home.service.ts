import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Users {
  id?: number,
  username: string,
  email: string,
  password: string,
  cPassword: string,
  role: string,
  loginPermission: boolean
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  usersUrl = ' http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.usersUrl);
  }

  addUser(user) {
    return this.httpClient.post(this.usersUrl, user);
  }
}
