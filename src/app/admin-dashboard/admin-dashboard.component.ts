import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { SignupServiceService } from '../home/service/signup-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userlist=[];
  constructor(private signupService:SignupServiceService ) { }

  ngOnInit(): void {debugger
    this.signupService.getSignup().subscribe(res=>{
      this.userlist=res;
    })
  }

}
