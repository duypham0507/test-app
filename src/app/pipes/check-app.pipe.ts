import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkApp'
})
export class CheckAppPipe implements PipeTransform {

  transform(value: string): string {
    let newStr: string = 'Member: ' + value;
    return newStr;
  }

}
