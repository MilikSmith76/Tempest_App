import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductboardComponent } from './productboard/productboard.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PromotionboardComponent } from './promotionboard/promotionboard.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { PromotionpageComponent } from './promotionpage/promotionpage.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { PromotioncreateComponent } from './promotioncreate/promotioncreate.component';
import { AddpromotionproductComponent } from './addpromotionproduct/addpromotionproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ProductcardComponent,
    ProductboardComponent,
    PaginationComponent,
    PromotionboardComponent,
    ProductpageComponent,
    PromotionpageComponent,
    ProductcreateComponent,
    PromotioncreateComponent,
    AddpromotionproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
