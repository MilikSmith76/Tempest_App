import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Config } from './config';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  config: Config = new Config();

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Product> {
    //this.http.get(config.apiEndPoint + "");

    return of(new Product(id, "Some Product", "This is a description for a product", "src/assets/images/home_background2.svg", 9.99));
  }

  getAll(page: number = -1, productsPerPage: number = -1): Observable<Product[]> {
    //this.http.get(config.apiEndPoint + "");
    var image: string = "src/assets/images/home_background2.svg";

    var products: Product[] = [
      new Product(1, "Product 1", "This is a description for product 1", image, 9.99),
      new Product(2, "Product 2", "This is a description for product 2", image, 19.99),
      new Product(3, "Product 3", "This is a description for product 3", image, 119.99),
      new Product(4, "Product 4", "This is a description for product 4", image, 199.99),
      new Product(5, "Product 5", "This is a description for product 5", image, 9.99),
      new Product(6, "Product 6", "This is a description for product 6", image, 19.99),
      new Product(7, "Product 7", "This is a description for product 7", image, 119.99),
    ];

    var productsOnPage:number = productsPerPage;
    var start:number = (page - 1) * productsPerPage;

    if  (page === 3) {
      productsOnPage = products.length - start;
    }

    var pageProducts = new Array<Product>(productsOnPage);

    for (var i:number = 0; i < productsOnPage; i++) {
      pageProducts[i] = products[start + i];
    }

    return of(pageProducts);
  }

  post() {
    //this.http.post(config.apiEndPoint + "");
  }

  put() {
    //this.http.put(config.apiEndPoint + "");
  }

  delete() {
    //this.http.delete(config.apiEndPoint + "");
  }
}
