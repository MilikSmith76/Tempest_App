import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  picture = "https://picsum.photos/900/500?random&t=1";
  product = new Product(-1, "Product 1", "This is a description for product 1", this.picture, 9.99);
  products = [
    new Product(-1, "Product 1", "This is a description for product 1", this.picture, 9.99),
    new Product(-1, "Product 2", "This is a description for product 2", this.picture, 19.99),
    new Product(-1, "Product 3", "This is a description for product 3", this.picture, 119.99),
  ];
}
