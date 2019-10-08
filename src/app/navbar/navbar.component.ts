import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() homeActive: boolean;
  @Input() productActive: boolean;
  @Input() promotionActive: boolean;

  navActive : string = "nav-item active";
  navNonActive : string = "nav-item";

  constructor() {
  }

  ngOnInit() {
  }

}
