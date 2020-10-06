import { MediaInfoComponent } from './media-info.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import movies from 'src/testing/data/movies-mock';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { MediaTimePipe } from 'src/app/pipes/media-time/media-time.pipe';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import Movie from 'src/app/model/movie/movie';
import TvShow from 'src/app/model/tv-show/tv-show';
import genres, { ADVENTURE, BIOPIC, DRAMA } from 'src/testing/data/genres.mock';

describe('Component: MediaInfoComponent', () => {
    let spectator: SpectatorHost<MediaInfoComponent>;
    const createHost = createHostFactory({
        component: MediaInfoComponent,
        declarations: [
            MediaDatePipe, MediaTimePipe, ReleaseDatePipe, MediaTitlePipe
        ],
        providers: [
            { provide: RuntimePipe }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('title', () => {
        it('should display the movie original title when given a movie', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('.media-info_title')).toHaveText(movies[0].original_title);
        });

        it('should display the tvShow original name when given a tvShow', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: tvShows[0],
                }
            });
            expect(spectator.query('.media-info_title')).toHaveText(tvShows[0].original_name);
        });
    });

    describe('release date', () => {
        it('should display the movie release date when given a movie', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('.media-info_release-date')).toHaveText('Feb 12, 2020');
        });

        it('should display the tvShow first air date when given a tvShow', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: tvShows[0],
                }
            });
            expect(spectator.query('.media-info_release-date')).toHaveText('Feb 12, 2020');
        });
    });

    describe('genres', () => {
        it('should display n genres when given a movie with n genres', () => {
            const movie: Movie = {...movies[0], genres: [BIOPIC, ADVENTURE, DRAMA]};
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: movie,
                }
            });
            expect(spectator.queryAll('.media-info_genre')).toHaveLength(3);
        });

        it('should display n genres date when given a tvShow with n genres', () => {
            const tvShow: TvShow = {...tvShows[0], genres};
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: tvShow,
                }
            });
            expect(spectator.queryAll('.media-info_genre')).toHaveLength(4);
        });
    });

    describe('timer', () => {
        it('should display movie duration formatted when given a movie', () => {
            const movie: Movie = {...movies[0], runtime: 124};
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: movie,
                }
            });
            expect(spectator.query('.media-info_timer')).toHaveText('2h04');
        });

        it('should display number of season and number of episodes when given a tvShow', () => {
            const tvShow: TvShow = {...tvShows[0], number_of_episodes: 40, number_of_seasons: 4};
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: tvShow,
                }
            });
            expect(spectator.query('.media-info_timer')).toHaveText('4 seasons, 40 episodes');
        });
    });

    describe('overview', () => {
        it('should display movie overview when given a movie', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('.media-info_overview')).toHaveText(movies[0].overview);
        });

        it('should display tvShow overview when given a tvShow', () => {
            spectator = createHost(`<media-info [media]="media"></media-info>`, {
                hostProps: {
                    media: tvShows[0],
                }
            });
            expect(spectator.query('.media-info_overview')).toHaveText(tvShows[0].overview);
        });
    });
});
