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

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  p_images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  promotions = [
    new Promotion(-1, true, "Promotion 1", "This is a description for promotion 1", this.images[0], this.images[0]),
    new Promotion(-1, true, "Promotion 2", "This is a description for promotion 2", this.images[1], this.images[1]),
    new Promotion(-1, true, "Promotion 3", "This is a description for promotion 3", this.images[2], this.images[2]),
    new Promotion(-1, true, "Promotion 4", "This is a description for promotion 4", this.images[3], this.images[3])
  ];

  products = [
    new Product(-1, "Product 1", "This is a description for product 1", this.p_images[0], 9.99),
    new Product(-1, "Product 2", "This is a description for product 2", this.p_images[1], 19.99),
    new Product(-1, "Product 3", "This is a description for product 3", this.p_images[2], 119.99),
  ];
}
