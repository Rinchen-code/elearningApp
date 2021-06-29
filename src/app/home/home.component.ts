import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  navHome(){
    this.router.navigateByUrl("home")
  }
  navCourse(){
    this.router.navigateByUrl("Course")
  }
  navAddCourse(){
    this.router.navigateByUrl("addcourse")
  }
  navLogin(){
    this.router.navigateByUrl("")
  }
  navAdmin(){
    this.router.navigateByUrl("navAdmin")
  }

}
