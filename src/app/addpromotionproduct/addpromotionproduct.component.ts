import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from "../product";
import { Promotion } from "../promotion";

@Component({
  selector: 'app-addpromotionproduct',
  templateUrl: './addpromotionproduct.component.html',
  styleUrls: ['./addpromotionproduct.component.css']
})
export class AddpromotionproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  product = new Product(2, "Product 1", "This is a description for product 1", "", 9.99);

  promotions = [
    new Promotion(1, true, "Promotion 1", "This is a description for promotion 1", "", ""),
    new Promotion(2, true, "Promotion 2", "This is a description for promotion 1", "", ""),
    new Promotion(3, true, "Promotion 3", "This is a description for promotion 1", "", ""),
    new Promotion(4, true, "Promotion 4", "This is a description for promotion 1", "", ""),
  ];

  productId = this.product.getId();

  promotionId = this.promotions[0].getId();

  discount = this.product.getPrice();

  onSubmit() {

  }
}
