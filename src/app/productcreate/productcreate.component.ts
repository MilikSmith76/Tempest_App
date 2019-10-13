import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from "../product";

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  productId = -1;

  blank = "";

  model = new Product();

  submitted = false;

  onSubmit() {
    //Incomplete needs to figure out how to save the gotton image
    this.submitted = true;
    this.router.navigate(['/products']);
  }

}
