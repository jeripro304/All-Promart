import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  constructor(private eser:ProductServiceService){
    
  }
  searchText=""
  bol:boolean=false
  pl=this.eser.getProduct();
  onclick(){

    this.bol=true

    console.log(this.bol)

 

  }
}
