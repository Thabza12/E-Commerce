import { Pipe, PipeTransform } from '@angular/core';
import { Cellphone } from './common/cellphone';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Cellphones: Cellphone[], searchValue: string): Cellphone[] {

    if(!Cellphones || !searchValue){
      return Cellphones;
    }
    return Cellphones.filter(cellphones => 
      cellphones.modelName.toLowerCase().includes(searchValue.toLowerCase()) ||
      cellphones.manufactureName.toLowerCase().includes(searchValue.toLowerCase())
      );
    
  }

}
