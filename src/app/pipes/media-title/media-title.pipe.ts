import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../model/media/media';
import EType from '../../model/type/type-enum';

@Pipe({
  name: 'mediaTitle'
})
export class MediaTitlePipe implements PipeTransform {

  transform(value: Media): string {
    if (value.type === EType.Movie) {
      return value.original_title;
    } else if (value.type === EType.TvShow) {
      return value.original_name;
    }
  }
}
