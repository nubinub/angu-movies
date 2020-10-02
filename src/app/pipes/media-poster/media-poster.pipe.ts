import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

@Pipe({
  name: 'mediaPoster',
})
export class MediaPosterPipe implements PipeTransform {
  constructor(@Inject(IMAGE_BASE_URL) private imageBaseUrl: string) {
  }

  transform(media: Media): unknown {
    return media ? `${this.imageBaseUrl}t/p/w500${media.poster_path}` : '';
  }
}
