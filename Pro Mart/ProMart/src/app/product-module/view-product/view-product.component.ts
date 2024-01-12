import { Component, Input } from '@angular/core';
import { Product } from '../Model/product';
import { ProductServiceService, category } from '../product-service.service';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  productList:Product[];
  categorys:string[];
  category:string = 'ALL';
  editview:boolean=false;


  constructor(private eService:ProductServiceService){
    this.productList = eService.getProduct();
    this.categorys = category;
    this.edit =  false;
    this.delete = false;
  }

   @Input() edit:boolean ;
  editId:any;

  onEdit(Id:any){
    this.edit = true;
    console.log(Id);
    this.editId = Id;
    this.editview=true;
    
    console.log(this.editId);
    
  }

  changingEdit(change:boolean){
    this.edit = change;
   
    
    
  }


  delete:boolean ;
  deleteI:any;
  deleteId(product:any){
    let isexecuted=confirm('Are you sure you want to delete')
    if (isexecuted){
      this.delete = true;
    this.deleteI = product.Pid;
    this.eService.deleteProduct(product);
    }
    
  }

  ChangingDelete(change:any){
    this.delete = change;
  }

}
