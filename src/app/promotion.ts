export class Promotion {
  public id: number;
  public active: boolean;
  public name: string;
  public description: string;
  public dashboardImage: string;
  public bannerImage: string;

  constructor(id:number = -1, active:boolean = false, name:string = "", description:string = "", dashboard:string = "", banner:string = "") {
    this.id = id;
    this.active = active;
    this.name = name;
    this.description = description;
    this.dashboardImage = dashboard;
    this.bannerImage = banner;
  }

  getId() {
    return this.id;
  }

  getActive() {
    return this.active;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getDashboardImage() {
    return this.dashboardImage;
  }

  getBannerImage() {
    return this.bannerImage;
  }
}
