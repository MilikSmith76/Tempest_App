import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage = 1;
  @Input() maxDisplay: number;
  @Input() totalPages: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onPrev(): void {
    if (this.currentPage != 1) {
      this.currentPage--;
      this.goPrev.emit(true);
    } else {
      this.goPrev.emit(false);
    }

  }

  onNext(): void {
    if (this.currentPage != this.totalPages) {
      this.currentPage++;
      this.goNext.emit(true);
    } else {
      this.goNext.emit(false);
    }
  }

  onPage(n: number): void {
    this.currentPage = n;
    this.goPage.emit(n)
  }

  createPages(): number[] {
     var offset = 1;
     var numberOfPages = 0;
     if (this.totalPages <= this.maxDisplay) {
       numberOfPages = this.totalPages;
     } else {
       //Assume that the maximimu amout of pages to be displayed is an even number
       var halfDisplay = this.maxDisplay / 2;
       numberOfPages = this.maxDisplay;
       if (this.currentPage + halfDisplay > this.totalPages) {
         offset = this.currentPage - (halfDisplay - 1) - (this.currentPage + halfDisplay - this.totalPages)
       } else if (this.currentPage - halfDisplay > 0) {
         offset = this.currentPage - (halfDisplay - 1)
       }
     }
     var newPages = new Array<number>(numberOfPages);

     for (var i:number = 0; i < numberOfPages; i++) {
       newPages[i] = i + offset;
     }

     return newPages;
  }

}
