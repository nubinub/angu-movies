import { Inject, Injectable, InjectionToken } from '@angular/core';
import Cast from 'src/app/model/cast/cast';
import { Media } from 'src/app/model/media/media';

export const IMAGE_BASE_URL = new InjectionToken<string>('Image base url');

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  constructor(@Inject(IMAGE_BASE_URL) private imageBaseUrl: string) { }

  /**
   * Get the movie poster url
   * @param media The media
   */
  getMediaPosterUrl(media: Media) {
    return media ? `${this.imageBaseUrl}t/p/w500${media.poster_path}` : '';
  }

  /**
   * Get the cast poster url
   * @param cast The cast
   */
  getCastPosterUrl(cast: Cast) {
    return cast ? `${this.imageBaseUrl}t/p/w138_and_h175_face${cast.profile_path}` : '';
  }
}
