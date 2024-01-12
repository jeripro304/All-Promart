import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule
  ]
})
export class CustomerModuleModule { }
