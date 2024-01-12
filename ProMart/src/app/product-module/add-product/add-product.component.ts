import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ProductServiceService, category } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  
  
  plist:Product;

  
  constructor(private eser:ProductServiceService){
    this.plist=new Product('','','','','','')
  }

  dataSubmitted(){
    console.log(this.plist);
    this.eser.addProduct(this.plist)
    
  }

  hasError:boolean=false;
  validate(date:string){
    if (date ==='default'){
      this.hasError=true
    }
    else{
      this.hasError=false
    }
  }
  cate:any=category;
}
