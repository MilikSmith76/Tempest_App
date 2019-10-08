export class Product {
  public id: number;
  public name: string;
  public description: string;
  public imageFile: string;
  public price: number;

  constructor(id:number = -1, name:string = "", description:string = "", imageFile = "", price:number = 0.00) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageFile = imageFile;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getImageFile() {
    return this.imageFile;
  }

  getPrice() {
    return this.price;
  }

  getURL() {
    return "product/" + this.id;
  }

}
