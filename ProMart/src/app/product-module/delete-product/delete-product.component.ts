import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() product:any;
  pService = new ProductServiceService();
  @Output() ChangeDelete = new EventEmitter();

  OnYes(){
    console.log(this.product.Pid);
    // const index = this.pService.productList.indexOf(this.product);
    // console.log(index);
    
    this.pService.deleteProduct(this.product);
    this.ChangeDelete.emit(false);
  }

}
