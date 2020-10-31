import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import { HomeComponent }   from './home/home.component';
import { SignupComponent }  from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductboardComponent } from './productboard/productboard.component';
import { PromotionboardComponent } from './promotionboard/promotionboard.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { PromotionpageComponent } from './promotionpage/promotionpage.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { PromotioncreateComponent } from './promotioncreate/promotioncreate.component';
import { AddpromotionproductComponent } from './addpromotionproduct/addpromotionproduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductboardComponent },
  { path: 'promotion', component: PromotionboardComponent },
  { path: 'product/create', component: ProductcreateComponent },
  { path: 'promotion/create', component: PromotioncreateComponent },
  // { path: 'product/modify/:productId', component: ProductcreateComponent },
  // { path: 'promotion/modify/:promotionId', component: PromotioncreateComponent },
  { path: 'product/:productId', component: ProductpageComponent },
  { path: 'promotion/:promotionId', component: PromotionpageComponent },
  { path: 'addpromotionproduct', component: AddpromotionproductComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
