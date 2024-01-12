
import { Injectable } from '@angular/core';
import { Product } from './Model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService  {
 

  productList:Product[] = [new Product("P102","RedmiNote8","Cooling",7000,"Mobile",8),new Product('P101',"Dell Inspiron","I7 Processor",70000,"Laptop",4)
  ,new Product("P103","Iphone","Performance",80000,"Mobile",2),new Product('P104',"Asus Rog","Best Gaming Experience",60000,"Laptop",7)
,new Product("P105","Ram Stick 8 gb","DDR5 4000 MHz",2000,"Electronic Accessories",10),new Product('P106',"RTX 4090","Ray tracing Enabled",120000,"Electronic Accessories",1)];

                  
 

  constructor( ) { }


deleteProduct(product:Product){
  console.log(product);

  const index = this.productList.indexOf(product);
  console.log(index);
  if(index > -1){
    this.productList.splice(index,1);
  }
}

getProduct():Product[]{
  return  this.productList;
}

addProduct(product:Product){
  this.productList.unshift(product);
}

editProduct(p:Product,price:any,qty:any){
  p.Pprice = price;
  p.Pqty = qty;

}
  
  
}

export let category = ['Mobile','Laptop','Electronic Accessories'];
