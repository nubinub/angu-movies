import { MediaDetailsComponent } from './media-details.component';
import { createHostFactory, mockProvider, SpectatorHost } from '@ngneat/spectator';
import movies from 'src/testing/data/movies-mock';
import { MediaBackdropPipe } from 'src/app/pipes/media-backdrop/media-backdrop.pipe';
import { MediaService } from 'src/app/services/media/media.service';
import { of } from 'rxjs';
import { casts } from 'src/testing/data/casts.mock';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

describe('Component: MediaCardComponent', () => {
    let spectator: SpectatorHost<MediaDetailsComponent>;
    const createHost = createHostFactory({
        component: MediaDetailsComponent,
        declarations: [MediaBackdropPipe],
        providers: [
            mockProvider(MediaService, {
                getMediaDetails: () => of([movies[0], casts])
            }),
            {
                provide: IMAGE_BASE_URL,
                useValue: 'image-api/'
            }
        ],
        shallow: true,
    });

    describe('title', () => {
        it('should render no title when no title given', () => {
            spectator = createHost(`<media-details [media]="media" [title]="title"></media-details>`, {
                hostProps: {
                    media: movies[0],
                    title: undefined,
                },
                providers: [

                ]
            });
            expect(spectator.query('.media-details_title')).not.toExist();
        });

        it('should render title when given title', () => {
            spectator = createHost(`<media-details [media]="media" [title]="title"></media-details>`, {
                hostProps: {
                    media: movies[0],
                    title: 'My custom test'
                },
            });
            expect(spectator.query('.media-details_title')).toHaveText('My custom test');
        });
    });

    describe('casting list', () => {
        it('should render 5 cast-card when more than 5 cast cards', () => {
            spectator = createHost(`<media-details [media]="media" [title]="title"></media-details>`, {
                hostProps: {
                    media: movies[0],
                    title: undefined,
                },
            });
            expect(spectator.queryAll('cast-card')).toHaveLength(5);
        });

        it('should render n cast-card when less than 5 cast cards', () => {
            spectator = createHost(`<media-details [media]="media" [title]="title"></media-details>`, {
                hostProps: {
                    media: movies[0],
                    title: undefined,
                },
                providers: [
                    mockProvider(MediaService, {
                        getMediaDetails: () => of([movies[0], casts.slice(0, 2)])
                    })
                ]
            });
            expect(spectator.queryAll('cast-card')).toHaveLength(2);
        });
    });

});
