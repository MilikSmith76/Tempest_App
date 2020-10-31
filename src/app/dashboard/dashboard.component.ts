import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Promotion } from '../promotion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [ "src/assets/images/home_background2.svg" ];
  promotions = [
    new Promotion(-1, true, "Promotion 1", "This is a description for promotion 1", this.images[0], this.images[0]),
    new Promotion(-1, true, "Promotion 2", "This is a description for promotion 2", this.images[0], this.images[0]),
    new Promotion(-1, true, "Promotion 3", "This is a description for promotion 3", this.images[0], this.images[0]),
    new Promotion(-1, true, "Promotion 4", "This is a description for promotion 4", this.images[0], this.images[0])
  ];

  products = [
    new Product(-1, "Product 1", "This is a description for product 1", "src/assets/images/home_background2.svg", 9.99),
    new Product(-1, "Product 2", "This is a description for product 2", "src/assets/images/home_background2.svg", 19.99),
    new Product(-1, "Product 3", "This is a description for product 3", "src/assets/images/home_background2.svg", 119.99),
  ];
}
