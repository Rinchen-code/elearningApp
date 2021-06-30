import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HomeService} from "../service/home.service";
import {Router} from "@angular/router";
// import { SignUpClass } from '../../sign-up-class';
// import { SignupServiceService } from '../../service/signup-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//   signupUrl:"http://localhost:76/user"
  signUpForm;

  constructor(private builder: FormBuilder, private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm() {
    this.signUpForm = this.builder.group({
      id: [''],
      username: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      cPassword: [undefined, Validators.required],
      role: 'user',
      loginPermission: false
    });
  }

  submitSignupForm() {
    this.homeService.addUser(this.signUpForm.value).subscribe(res => {
        this.signUpForm.reset();
        this.router.navigateByUrl('/login');
        alert('SignUp created successfully!, but need to get approval from admin.');
      },
      () => {
        alert("SignUp failed, please can you try again")
      });
  }

}
