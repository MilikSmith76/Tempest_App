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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductboardComponent },
  { path: 'promotion', component: PromotionboardComponent },
  { path: 'product/:productId', component: ProductpageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
