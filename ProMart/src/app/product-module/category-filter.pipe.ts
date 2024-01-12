import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products:Product[], category:string): any {
    if(category == 'ALL'){
      return products;
    }
    else{
      return products.filter((product)=>product.Category==category);
  }
    }
    

}
