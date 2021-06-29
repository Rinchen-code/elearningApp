import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { SignupServiceService } from '../../service/signup-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signForm:FormGroup;
  constructor(private navSrouter:Router,private builder:FormBuilder, private signupService:SignupServiceService) { }

  ngOnInit(): void {
    this.signForm=this.builder.group({
      email:"",
      password:""

    })
  }
  navSignup(){
this.navSrouter.navigateByUrl("Signup")
  }
  compareUserLogin(){debugger
    this.signupService.getSignup().subscribe(registor=>{
      console.log(registor.values.name)
      for(let data of registor){
        if(data.email===this.signForm.value.email && data.password===this.signForm.value.password){
          this.navSrouter.navigateByUrl("Course")
        }
      }

    })
  }
}
