import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

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
  user: User = null;
  showDropdown: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.get("test2@example.com", "654321")
    .subscribe(res => {
      if (res.status == 200 && res.empty == false) {
        var id: number = res.user.id;
        var email: string = res.user.email;
        var lastName: string = res.user.last_name;
        var firstName: string = res.user.first_name;
        var balance: number = res.user.balance;
        var isAdmin: boolean = (res.user.ut_id == 1)? true : false;

        this.user = new User(id, email, firstName, lastName, "", balance, isAdmin);
        // sessionStorage.setItem("tempest_id", String(id));
        // sessionStorage.setItem("tempest_email", email);
        // sessionStorage.setItem("tempest_first_name", firstName);
        // sessionStorage.setItem("tempest_last_name", lastName);
        // sessionStorage.setItem("tempest_user_type", String(res.user.ut_id));
      } else {
        this.user = new User(-1, "gradon@gmail.com", "test", "number 1", "", 0.0, false);
      }
    });
  }


}
