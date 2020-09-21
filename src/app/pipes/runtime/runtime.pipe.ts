import { Pipe, PipeTransform } from '@angular/core';
import moment, { duration } from 'moment';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  /**
   * Transform the given number of minutes into a H[h]mm representation, i.e 1h25 for 85 minutes.
   *
   * @param value Number of minutes
   */
  transform(value: number): string {
    return moment.utc(duration(value, 'minutes').asMilliseconds()).format('H[h]mm');
  }
}
