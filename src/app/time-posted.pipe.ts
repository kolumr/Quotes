import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePosted'
})
export class TimePostedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
