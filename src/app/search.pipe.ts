import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search' 
})
export class SearchPipe implements PipeTransform {

  transform(product,searchItem): unknown {
    if(!product || !searchItem){
      return product;
    }
    return product.filter ((products) => {
      return products.productName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
    })
  }
 }
  