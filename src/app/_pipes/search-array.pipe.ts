import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArray',
})
export class SearchArrayPipe implements PipeTransform {
  transform(
    inputArray: any[],
    searchText: string,
    filterProps: string[]
  ): any[] {
    let list: any[] = [];
    if (!searchText) {
      return inputArray;
    }
    inputArray.forEach((arrayObject) => {
      filterProps.forEach((props) => {
        if (
          arrayObject[props] &&
          arrayObject[props]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase()) &&
          !list.includes(arrayObject)
        ) {
          list.push(arrayObject);
        }
      });
    });
    return list;
  }
}
