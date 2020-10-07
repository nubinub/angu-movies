import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { of } from 'rxjs';
import { PopularMediasComponent } from 'src/app/components/popular-medias/popular-medias.component';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';
import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediasComponent } from './medias.component';

describe('Component: MediasComponent', () => {
    let spectator: Spectator<MediasComponent>;
    const lotOfMovies = [...movies, ...movies];
    const lotOfTvShows = [...tvShows, ...tvShows];
    const createComponent = createComponentFactory({
        component: MediasComponent,
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [PopularMediasComponent],
        providers: [
            { provide: MOVIE_API_BASE_URL, useValue: 'movie-api/' },
            mockProvider(
                MovieService, {
                    getDefaultMovies: () => of(lotOfMovies)
                }
            ),
            mockProvider(
                TvShowService, {
                    getDefaultTvShows: () => of(lotOfTvShows)
                }
            ),
        ],
        shallow: true,
    });

    describe('popular movies', () => {
        it('should display only 10 popular movies', () => {
            spectator = createComponent({
            });
            const popluarMovies = spectator.query(PopularMediasComponent);
            expect(popluarMovies.medias).toHaveLength(10);
            expect(popluarMovies.medias).toEqual(lotOfMovies.slice(1, 11));
        });
    });

    describe('popular tvShows', () => {
        it('should display only 10 popular tvShows', () => {
            spectator = createComponent({
            });
            const popularTvShows = spectator.queryLast(PopularMediasComponent);
            expect(popularTvShows.medias).toHaveLength(10);
            expect(popularTvShows.medias).toEqual(lotOfTvShows.slice(0, 10));
        });
    });
});
