import { Component, OnInit } from '@angular/core';

import { Promotion } from '../promotion';

@Component({
  selector: 'app-promotionboard',
  templateUrl: './promotionboard.component.html',
  styleUrls: ['./promotionboard.component.css']
})
export class PromotionboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentPage = 1;

  p_images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  promotions = [
    new Promotion(-1, true, "Promotion 1", "This is a test for Promotion 1", this.p_images[0], this.p_images[0]),
    new Promotion(-1, true, "Promotion 2", "This is a test for Promotion 2", this.p_images[1], this.p_images[1]),
    new Promotion(-1, true, "Promotion 3", "This is a test for Promotion 3", this.p_images[2], this.p_images[2]),
    new Promotion(-1, true, "Promotion 4", "This is a test for Promotion 4", this.p_images[3], this.p_images[3]),
  ];

  promotionsPerPage = 3;

  pages = Math.ceil(this.promotions.length / this.promotionsPerPage);

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

  getPagePromotions(): Promotion[] {
    var promotionsOnPage:number = this.promotionsPerPage;
    var start:number = (this.currentPage - 1) * this.promotionsPerPage;

    if  (this.currentPage === this.pages) {
      promotionsOnPage = this.promotions.length - start;
    }

    var pagePromotions = new Array<Promotion>(promotionsOnPage);

    for (var i:number = 0; i < promotionsOnPage; i++) {
      pagePromotions[i] = this.promotions[start + i];
    }

    return pagePromotions;
  }

}
