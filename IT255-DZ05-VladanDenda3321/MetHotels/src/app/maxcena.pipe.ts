import { Pipe, PipeTransform, Input } from '@angular/core';
import { Soba} from './soba/soba.model';
import{AppComponent} from './app.component';
@Pipe({
  name: 'maxcena'
})
export class MaxcenaPipe implements PipeTransform {
  
  transform(items: any[], price: number): any {
    if (!items) return [];
    if (!price) return items;
    return items.filter(it => {
      return it.cena <= price;
    });
  }
}
