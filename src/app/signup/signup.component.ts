import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router) {

  }

  model = new User();

  confirm = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.model.post();
    this.router.navigate(['/dashboard']);
  }

}
