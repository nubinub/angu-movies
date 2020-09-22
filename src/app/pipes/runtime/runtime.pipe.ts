import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  /**
   * Transform the given number of minutes into a H[h]mm representation, i.e 1h25 for 85 minutes.
   *
   * @param value Number of minutes
   */
  transform(minutes: number): string {
    return minutes ? `${Math.floor(minutes / 60)}h${(minutes % 60).toString().padStart(2, '0')}` : '0h00';
  }
}
