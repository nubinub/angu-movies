import { Pipe, PipeTransform } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import EType from 'src/app/model/type/type-enum';
import { RuntimePipe } from '../runtime/runtime.pipe';

@Pipe({
  name: 'mediaTime'
})
export class MediaTimePipe implements PipeTransform {

  constructor(private runtimePipe: RuntimePipe) {
  }

  transform(media: Media): string {
    if (media) {
      if (media.type === EType.Movie) {
        return this.runtimePipe.transform(media.runtime);
      } else if (media.type === EType.TvShow) {
        return `${media.number_of_seasons} seasons, ${media.number_of_episodes} espisodes`;
      }
    }
    return '';
  }

}
