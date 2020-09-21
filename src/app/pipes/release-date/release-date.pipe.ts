import { Pipe, PipeTransform } from '@angular/core';
import { parse, format } from 'date-fns';

@Pipe({
  name: 'releaseDate'
})
export class ReleaseDatePipe implements PipeTransform {

  /**
   * Transform the given string representing a date in this format 'YYYY-MM-DD' into 'MMM D, YYYY' format representation.
   *
   * @param value Date value respecting the 'YYYY-MM-DD' format
   */
  transform(value: string): string {
    return value ? format(parse(value, 'yyyy-MM-dd', new Date()), 'MMM d, yyyy') : 'Invalid date';
  }
}
