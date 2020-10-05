import { Pipe, PipeTransform } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Pipe({
  name: 'mediaVote'
})
export class MediaVotePipe implements PipeTransform {

  transform(media: Media): number {
    return media ? Math.round((media.vote_average / 2) * 10) / 10 : NaN;
  }
}
