import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { SignUpClass } from '../../sign-up-class';
import { SignupServiceService } from '../../service/signup-service.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUrl:"http://localhost:76/user"
  listSignup:FormGroup;
  constructor(private formbuilder:FormBuilder, private signupService:SignupServiceService) { }

  ngOnInit(): void {
    this.postSignupList();
  }
  postSignupList(){
    this.listSignup=this.formbuilder.group({
      id:[""],
      username:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      cPassword:["", Validators.required]

    })
  }

  submitPostSignup(){
    this.signupService.postSignup(this.listSignup.value).subscribe(res=>{
    this.listSignup.reset()
    alert('SignUp successful')
  },
  ()=>{
    alert("SignUp failed")
  })  
    }

}
