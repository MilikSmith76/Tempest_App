import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productboard',
  templateUrl: './productboard.component.html',
  styleUrls: ['./productboard.component.css']
})
export class ProductboardComponent implements OnInit {

  currentPage: number = 1;

  pages: number;

  products: Product[];

  productsPerPage: number = 3;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.pages = 3;
    this.productService.getAll(this.currentPage, this.productsPerPage).subscribe(products => this.products = products);
    //this.pages = Math.ceil(this.products.length / this.productsPerPage);
  }

  goToPrev(go: boolean): void {
    if (go) {
      this.currentPage--;
      this.productService.getAll(this.currentPage, this.productsPerPage).subscribe(products => this.products = products);
    }
  }

  goToNext(go: boolean): void {
    if (go) {
      this.currentPage++;
      this.productService.getAll(this.currentPage, this.productsPerPage).subscribe(products => this.products = products);
    }
  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.productService.getAll(this.currentPage, this.productsPerPage).subscribe(products => this.products = products);
  }

  getPageProducts(): Product[] {
    // var productsOnPage:number = this.productsPerPage;
    // var start:number = (this.currentPage - 1) * this.productsPerPage;
    //
    // if  (this.currentPage === this.pages) {
    //   productsOnPage = this.products.length - start;
    // }
    //
    // var pageProducts: Product[] = new Array<Product>(productsOnPage);
    //
    // for (var i:number = 0; i < productsOnPage; i++) {
    //   pageProducts[i] = this.products[start + i];
    // }
    //
    // return pageProducts;
    return this.products;
  }
}
