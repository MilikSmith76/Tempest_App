import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Promotion } from "../promotion";

@Component({
  selector: 'app-promotioncreate',
  templateUrl: './promotioncreate.component.html',
  styleUrls: ['./promotioncreate.component.css']
})
export class PromotioncreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  promotionId = -1;

  blank = "";

  model = new Promotion();

  submitted = false;

  onSubmit() {
    //Incomplete needs to figure out how to save the gotton image
    this.submitted = true;
    this.router.navigate(['/promotions']);
  }

}
