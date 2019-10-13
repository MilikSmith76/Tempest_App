import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Promotion } from '../promotion';

@Component({
  selector: 'app-promotionpage',
  templateUrl: './promotionpage.component.html',
  styleUrls: ['./promotionpage.component.css']
})
export class PromotionpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentPage = 1;

  productsPerPage = 3;

  picture = "https://picsum.photos/900/500?random&t=1";

  promotion = new Promotion(-1, true, "Promotion 1", "This is a description for promotion 1", this.picture, this.picture);

  products = [
    new Product(-1, "Product 1", "This is a description for product 1", this.picture, 9.99),
    new Product(-1, "Product 2", "This is a description for product 2", this.picture, 19.99),
    new Product(-1, "Product 3", "This is a description for product 3", this.picture, 119.99),
  ];

  pages = Math.ceil(this.products.length / this.productsPerPage);

  goToPrev(go: boolean): void {
    if (go) {
      this.currentPage--;
    }
  }

  goToNext(go: boolean): void {
    if (go) {
      this.currentPage++;
    }
  }

  goToPage(n: number): void {
    this.currentPage = n;
  }

  getPageProducts(): Product[] {
    var productsOnPage:number = this.productsPerPage;
    var start:number = (this.currentPage - 1) * this.productsPerPage;

    if  (this.currentPage === this.pages) {
      productsOnPage = this.products.length - start;
    }

    var pageProducts = new Array<Product>(productsOnPage);

    for (var i:number = 0; i < productsOnPage; i++) {
      pageProducts[i] = this.products[start + i];
    }

    return pageProducts;
  }

}
