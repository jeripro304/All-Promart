import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {
    path: 'viewCustomer',
    component: ViewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
