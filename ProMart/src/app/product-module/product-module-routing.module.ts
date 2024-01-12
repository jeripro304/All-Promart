import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';


const routes: Routes = [
  {
    path: 'viewProduct',
    component: ViewProductComponent
  },
  {
    path: 'Create',
    component: AddProductComponent
  },
  {
    path:'search',
    component:SearchProductComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
