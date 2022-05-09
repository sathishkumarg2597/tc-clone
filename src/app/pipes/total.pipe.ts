import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
  pure: false,
})
export class TotalPipe implements PipeTransform {

  transform(products: any[]): number {
    return products.reduce((a, b)=>{
      return a + (b.price * b.quantity);
    }, 0)
  }

}
