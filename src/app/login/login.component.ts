import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this.loginForm = this._formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  loginClick() {
    if (this.loginForm.getRawValue().userName === 'admin') {
      this._router.navigate(['/admin-dashboard']);
    } else {
      this._router.navigate(['/user-dashboard']);
    }
  }

}
