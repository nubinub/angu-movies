import { MediaCardComponent } from './media-card.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('Component: MediaCardComponent', () => {
    let spectator: SpectatorHost<MediaCardComponent>;
    const createHost = createHostFactory({
        component: MediaCardComponent,
        imports: [MatDialogModule],
        declarations: [MediaTitlePipe, MediaDatePipe, ReleaseDatePipe],
        providers: [
            {provide: MatDialog, useValue: jasmine.createSpyObj(MatDialog, ['open'])}
        ],
        shallow: true,
    });

    describe('title', () => {
        it('should render title with movie original title when given a movie', () => {
            spectator = createHost(`<media-card [media]="media"></media-card>`, {
                hostProps: {
                    media: movies[0],
                },
            });
            expect(spectator.query('.media-card_title')).toHaveText(movies[0].original_title);
        });

        it('should render title with tvShow original name when given a tvShow', () => {
            spectator = createHost(`<media-card [media]="media"></media-card>`, {
                hostProps: {
                    media: tvShows[0],
                },
            });
            expect(spectator.query('.media-card_title')).toHaveText(tvShows[0].original_name);
        });
    });

    describe('subtitle', () => {
        it('should render a release date formatted when given a movie', () => {
            spectator = createHost(`<media-card [media]="media"></media-card>`, {
                hostProps: {
                    media: movies[0],
                },
            });
            expect(spectator.query('.media-card_subtitle')).toHaveText('Feb 12, 2020');
        });

        it('should render a first air date formatted when given a tvShow', () => {
            spectator = createHost(`<media-card [media]="media"></media-card>`, {
                hostProps: {
                    media: tvShows[0],
                },
            });
            expect(spectator.query('.media-card_subtitle')).toHaveText('Feb 12, 2020');
        });
    });

    describe('poster overlay', () => {
        it('should be hidden by default', () => {
            spectator = createHost(`<media-card [media]="media"></media-card>`, {
                hostProps: {
                    media: movies[0],
                },
            });

            expect(spectator.query('.media-card_poster-overlay')).toBeHidden();
        });

        describe('click', () => {
            it('should open a mat dialog', () => {
                spectator = createHost(`<media-card [media]="media"></media-card>`, {
                    hostProps: {
                        media: movies[0],
                    },
                });
                const spy = spectator.inject(MatDialog);
                spectator.click('.media-card_poster-overlay');
                expect(spy.open).toHaveBeenCalled();
            });
        });
    });
});
