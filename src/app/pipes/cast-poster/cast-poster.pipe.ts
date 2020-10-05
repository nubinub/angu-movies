import { Inject, Pipe, PipeTransform } from '@angular/core';
import Cast from 'src/app/model/cast/cast';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

@Pipe({
  name: 'castPoster'
})
export class CastPosterPipe implements PipeTransform {
  constructor(@Inject(IMAGE_BASE_URL) private imageBaseUrl: string) {
  }

  transform(cast: Cast): string {
    return cast ? `${this.imageBaseUrl}t/p/w138_and_h175_face${cast.profile_path}` : '';
  }
}
