import { CastCardComponent } from './cast-card.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { casts } from 'src/testing/data/casts.mock';
import { CastPosterPipe } from 'src/app/pipes/cast-poster/cast-poster.pipe';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

describe('Component: CastCardComponent', () => {
    let spectator: SpectatorHost<CastCardComponent>;
    const createHost = createHostFactory({
        component: CastCardComponent,
        declarations: [CastPosterPipe],
        providers: [
            {provide: IMAGE_BASE_URL, useValue: 'image-api/'}
        ]
    });

    describe('title', () => {
        it('should render title with cast name', () => {
            spectator = createHost(`<cast-card [cast]="cast"></cast-card>`, {
                hostProps: {
                    cast: casts[0],
                },
            });
            expect(spectator.query('.cast-card_title')).toHaveText(casts[0].name);
        });
    });

    describe('image', () => {
        it('should have cast name as alternate source', () => {
            spectator = createHost(`<cast-card [cast]="cast"></cast-card>`, {
                hostProps: {
                    cast: casts[0],
                },
            });
            expect(spectator.query('.cast-card_image')).toHaveAttribute('alt', casts[0].name);
        });

        it('should have src containing cast profile path', () => {
            spectator = createHost(`<cast-card [cast]="cast"></cast-card>`, {
                hostProps: {
                    cast: casts[0],
                },
            });
            const src = spectator.query('.cast-card_image').getAttribute('src');
            expect(src).toContain(casts[0].profile_path);
        });
    });
});
