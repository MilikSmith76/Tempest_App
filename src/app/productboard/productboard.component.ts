import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-productboard',
  templateUrl: './productboard.component.html',
  styleUrls: ['./productboard.component.css']
})
export class ProductboardComponent implements OnInit {

  currentPage = 1;

  p_images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  products = [
    new Product(-1, "Product 1", "This is a description for product 1", this.p_images[0], 9.99),
    new Product(-1, "Product 2", "This is a description for product 2", this.p_images[1], 19.99),
    new Product(-1, "Product 3", "This is a description for product 3", this.p_images[2], 119.99),
    new Product(-1, "Product 4", "This is a description for product 4", this.p_images[3], 199.99),
    new Product(-1, "Product 5", "This is a description for product 5", this.p_images[4], 9.99),
    new Product(-1, "Product 6", "This is a description for product 6", this.p_images[5], 19.99),
    new Product(-1, "Product 7", "This is a description for product 7", this.p_images[6], 119.99),
  ];

  productsPerPage = 3;

  pages = Math.ceil(this.products.length / this.productsPerPage);

  constructor() { }

  ngOnInit() {
  }

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
