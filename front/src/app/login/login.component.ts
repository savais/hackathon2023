import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  hide = true;
  appService!: AppService

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder , @Inject(forwardRef(() => AppService)) appService: AppService) { 
    this.appService = appService
  }
  
  async submit() {
    // let res = await fetch('http://127.0.0.1:3000/login', {method: 'POST', credentials: "include",  body: JSON.stringify(this.loginFormGroup.value)})
    // console.log(this.loginFormGroup.value)
    // console.log(res)
    this.appService.loggedIn = true
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['logout'] == "true") {
        console.log("log-out")
        this.appService.loggedIn = false
        this.router.navigate(['/'])
      }
    });

    this.loginFormGroup = this.fb.group({
      username: new FormControl,
      password: new FormControl
    })
  }

}
