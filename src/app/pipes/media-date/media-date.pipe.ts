import { Pipe, PipeTransform } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import EType from 'src/app/model/type/type-enum';

@Pipe({
  name: 'mediaDate'
})
export class MediaDatePipe implements PipeTransform {

  transform(value: Media): string {
    let date: string;
    if (value.type === EType.Movie) {
      date = value.release_date;
    } else if (value.type === EType.TvShow) {
      date = value.first_air_date;
    }
    return date;
  }

}
