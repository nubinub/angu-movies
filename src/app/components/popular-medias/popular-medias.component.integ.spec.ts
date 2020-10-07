import { PopularMediasComponent } from './popular-medias.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Component: PopularMediasComponent', () => {
    let spectator: SpectatorHost<PopularMediasComponent>;
    const createHost = createHostFactory({
        component: PopularMediasComponent,
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('title', () => {
        it('should display the given title', () => {
            spectator = createHost(`<popular-medias [titleText]="title"></popular-medias>`, {
                hostProps: {
                    title: 'My custom test',
                }
            });
            expect(spectator.query('.popular-medias_title')).toHaveText('My custom test');
        });

        it('should display nothing when given no title', () => {
            spectator = createHost(`<popular-medias [titleText]="title"></popular-medias>`, {
                hostProps: {
                    title: undefined,
                }
            });
            expect(spectator.query('.popular-medias_title')).not.toExist();
        });
    });
});
