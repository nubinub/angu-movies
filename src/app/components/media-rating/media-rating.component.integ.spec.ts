import { MediaRatingComponent } from './media-rating.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaVotePipe } from 'src/app/pipes/media-vote/media-vote.pipe';
import Movie from 'src/app/model/movie/movie';
import TvShow from 'src/app/model/tv-show/tv-show';

describe('Component: MediaPosterComponent', () => {
    let spectator: SpectatorHost<MediaRatingComponent>;
    const createHost = createHostFactory({
        component: MediaRatingComponent,
        declarations: [
            MediaVotePipe,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('text', () => {
        it('should display 4 when given a media with vote_average of 8', () => {
            const movie: Movie = { ...movies[0], vote_average: 8 };
            spectator = createHost(`<media-rating [media]="media"></media-rating>`, {
                hostProps: {
                    media: movie,
                }
            });
            expect(spectator.query('.media-rating_text')).toHaveText('4');
        });

        it('should display 4.3 when given a media with vote_average of 8.5', () => {
            const tvShow: TvShow = { ...tvShows[0], vote_average: 8.5 };
            spectator = createHost(`<media-rating [media]="media"></media-rating>`, {
                hostProps: {
                    media: tvShow,
                }
            });
            expect(spectator.query('.media-rating_text')).toHaveText('4.3');
        });
    });

    describe('stars', () => {
        it('should display 4 full stars and bordered star when given a media with vote_average of 8', () => {
            const movie: Movie = { ...movies[0], vote_average: 8 };
            spectator = createHost(`<media-rating [media]="media"></media-rating>`, {
                hostProps: {
                    media: movie,
                }
            });
            expect(spectator.queryAll('.media-rating_star').filter((star) => star.innerHTML === 'star')).toHaveLength(4);
            expect(spectator.queryAll('.media-rating_star').filter((star) => star.innerHTML === 'star_border')).toHaveLength(1);
        });

        it('should display 4 full stars and a half star when given a media with vote_average of 8.5', () => {
            const tvShow: TvShow = { ...tvShows[0], vote_average: 8.5 };
            spectator = createHost(`<media-rating [media]="media"></media-rating>`, {
                hostProps: {
                    media: tvShow,
                }
            });
            expect(spectator.queryAll('.media-rating_star').filter((star) => star.innerHTML === 'star')).toHaveLength(4);
            expect(spectator.queryAll('.media-rating_star').filter((star) => star.innerHTML === 'star_half')).toHaveLength(1);
        });
    });

});
