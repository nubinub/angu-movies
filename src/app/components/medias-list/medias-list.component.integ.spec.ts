import { MediasListComponent } from './medias-list.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';

describe('Component: MediasListComponent', () => {
    let spectator: SpectatorHost<MediasListComponent>;
    const createHost = createHostFactory({
        component: MediasListComponent,
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('cards', () => {
        it('should display 4 media-cards when given a list with 4 items', () => {
            spectator = createHost(`<medias-list [items]="items"></medias-list>`, {
                hostProps: {
                    items: movies.slice(0, 4),
                }
            });
            expect(spectator.queryAll('media-card')).toHaveLength(4);
        });
        it('should display 7 media-cards when given a list with 7 items', () => {
            spectator = createHost(`<medias-list [items]="items"></medias-list>`, {
                hostProps: {
                    items: tvShows.slice(0, 7),
                }
            });
            expect(spectator.queryAll('media-card')).toHaveLength(7);
        });
    });
});
