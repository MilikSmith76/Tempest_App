export class User {
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public balance: number;
  public isAdmin: boolean

  constructor(id: number = -1, email: string = "", first: string = "", last: string = "", password: string = "", balance: number = 0, isAdmin: boolean = false) {
    this.id = id;
    this.email = email;
    this.firstName = first;
    this.lastName = last;
    this.password = password;
    this.balance = balance;
    this.isAdmin = isAdmin;
  }

  getId() {
    return this.id;
  }

  getBalance() {
    return this.balance;
  }

  getEmail() {
    return this.email;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getPassword() {
    return this.password;
  }

  getUser(email: string, password: string) {
    //Incomplete
    return false;
  }

  post() {
    //Incomplete
    return true;
  }

}
