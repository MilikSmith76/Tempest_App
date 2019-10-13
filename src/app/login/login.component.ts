import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  email = "";

  password = "";

  potentialUser = new User();

  isUser = false;

  onSubmit() {
    this.isUser = this.potentialUser.getUser(this.email, this.password);
    this.router.navigate(['/dashboard']);
  }

}
