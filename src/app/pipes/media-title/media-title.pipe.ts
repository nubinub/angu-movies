import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../model/media/media';
import EType from '../../model/type/type-enum';

@Pipe({
  name: 'mediaTitle'
})
export class MediaTitlePipe implements PipeTransform {

  transform(value: Media): string {
    let output = '';
    if (value) {
      if (value.type === EType.Movie) {
        output = value.original_title;
      } else if (value.type === EType.TvShow) {
        output = value.original_name;
      }
    }
    return output;
  }
}
