import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupValidators } from './signup-validators';

@Component({
  selector: 'app-reactive-form-signup',
  templateUrl: './reactive-form-signup.component.html',
  styleUrls: ['./reactive-form-signup.component.css']
})
export class ReactiveFormSignupComponent {

  constructor() {}

     form = new FormGroup({
      username: new FormControl('',
      [ Validators.required,
        SignupValidators.noWhiteSpaceAllowed,
        SignupValidators.availableUserId,
      ]),
      password: new FormControl('',
      [ Validators.required,
        Validators.minLength(3),
        SignupValidators.noWhiteSpaceAllowed
      ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    console.log(this.username);

  }
}
