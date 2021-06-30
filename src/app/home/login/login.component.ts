import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import {HomeService} from "../service/home.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private router: Router, private builder: FormBuilder, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.builder.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required]
    })
  }

  compareUserLogin() {
    this.homeService.getUsers().subscribe(responseData => {
      const emailValue = this.loginForm.get('email').value; // admin@gmail.com
      const passwordValue = this.loginForm.get('password').value; //admin1234
      const user = responseData.filter(vo => vo.password === passwordValue && vo.email === emailValue);
      if(user && user[0]) {
        if(user[0].loginPermission) {
          alert('login successfully!');
          this.router.navigateByUrl('/' + user[0].role);
        } else {
          alert('You need approval from Admin to access Course.');
          this.loginForm.reset();
        }
      } else {
        alert('Your password or Email is Invalid, if you dont have account! Please sign in to get Interesting Course.');
        this.loginForm.reset();
      }
    })
  }
}
