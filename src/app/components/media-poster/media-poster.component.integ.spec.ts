import { MediaPosterComponent } from './media-poster.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import movies from 'src/testing/data/movies-mock';
import { MediaPosterPipe } from 'src/app/pipes/media-poster/media-poster.pipe';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { tvShows } from 'src/testing/data/tv-shows-mock';

describe('Component: MediaPosterComponent', () => {
    let spectator: SpectatorHost<MediaPosterComponent>;
    const createHost = createHostFactory({
        component: MediaPosterComponent,
        declarations: [
            MediaPosterPipe,
            MediaTitlePipe,
        ],
        providers: [
            { provide: IMAGE_BASE_URL, useValue: 'image-api/' }
        ],
        shallow: true,
    });

    describe('image', () => {
        it('should have a src with the movie poster path and alt with movie original title when given a movie', () => {
            spectator = createHost(`<media-poster [media]="media"></media-poster>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            const img = spectator.query('img');
            const src = img.getAttribute('src');
            expect(src).toContain(movies[0].poster_path);
            expect(src).toContain('image-api/');
            expect(img.getAttribute('alt')).toContain(movies[0].original_title);
        });

        it('should have a src with the tv show poster path and alt with tv show original name when given a tvShow', () => {
            spectator = createHost(`<media-poster [media]="media"></media-poster>`, {
                hostProps: {
                    media: tvShows[0],
                }
            });
            const img = spectator.query('img');
            const src = img.getAttribute('src');
            expect(src).toContain(tvShows[0].poster_path);
            expect(src).toContain('image-api/');
            expect(img.getAttribute('alt')).toContain(tvShows[0].original_name);
        });
    });

});
