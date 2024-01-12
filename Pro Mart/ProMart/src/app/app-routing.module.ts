import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-module/product/product.component';
import { CustomerComponent } from './customer-module/customer/customer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
