import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

import { User, UserInterface } from './user';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  config: Config = new Config();

  errorUser: UserInterface = {
    status: 404,
    user: {
      id: -1,
      balance: 0.00,
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      ut_id: -1,
    },
    empty: true,
  };

  constructor(private http: HttpClient) { }

  get(email: string = "", password: string = ""): Observable<UserInterface> {

    if (email == "" && password == "" && sessionStorage.getItem("tempest_email") == null) {
      return of(this.errorUser);
    } else if (email == "" && password == "") {
      var id: number = Number(sessionStorage.getItem("tempest_id"));
      var email: string = sessionStorage.getItem("tempest_email");
      var lastName: string = sessionStorage.getItem("tempest_first_name");
      var firstName: string = sessionStorage.getItem("tempest_last_name");
      var userType: number = (sessionStorage.getItem("tempest_user_type") == "1")? 1 : 2;

      return of({
        status: 200,
        user: {
          id: id,
          balance: 0.00,
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: '',
          ut_id: userType,
        },
        empty: false,
      });
    } else {
      const params: HttpParams = new HttpParams()
      .set("email", String(email))
      .set("password", String(password));
      console.log(this.config.apiEndPoint + "/api/user");
      return this.http.get<UserInterface>(this.config.apiEndPoint + "/api/user", {params})
        .pipe(
          timeout(3000),
          catchError(this.getErrorHandler()));
      // sessionStorage.setItem("frontend_color_choice", "p");
    }
  }

  post(email: string, firstName: string, lastName: string, password, isAdmin: boolean = false, login: boolean = true): boolean {
    //API call
    return true;
  }

  put(id: number, email: string, firstName: string, lastName: string, password, balance: number): boolean {
    //API call
    return true;
  }

  delete(id: number): boolean {
    //API call
    return true;
  }

  private getErrorHandler() {
    return (error: any) => {
      return of(this.errorUser);
    }
  }

}
