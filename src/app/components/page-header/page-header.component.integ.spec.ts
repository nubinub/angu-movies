import { PageHeaderComponent } from './page-header.component';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Component: PageHeaderComponent', () => {
    let spectator: SpectatorHost<PageHeaderComponent>;
    const createHost = createHostFactory({
        component: PageHeaderComponent,
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('title', () => {
        it('should display the given title', () => {
            spectator = createHost(`<page-header [titleText]="title"></page-header>`, {
                hostProps: {
                    title: 'My custom test',
                }
            });
            expect(spectator.query('.page-header_title')).toHaveText('My custom test');
        });

        it('should display nothing when given no title', () => {
            spectator = createHost(`<page-header [titleText]="title"></page-header>`, {
                hostProps: {
                    title: undefined,
                }
            });
            expect(spectator.query('.page-header_title')).toBeEmpty();
        });
    });
});
