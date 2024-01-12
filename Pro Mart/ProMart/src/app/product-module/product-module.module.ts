import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFilterPipe } from './category-filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SearchproductPipe } from './searchproduct.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ViewProductComponent,
    AddProductComponent,
    CategoryFilterPipe,
    EditProductComponent,
    SearchProductComponent,
    SearchproductPipe
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
    
})
export class ProductModuleModule { }
