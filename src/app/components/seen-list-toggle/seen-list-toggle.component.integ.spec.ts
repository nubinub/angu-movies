import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SeenListToggleComponent } from './seen-list-toggle.component';
import movies from 'src/testing/data/movies-mock';
import { SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

describe('Component: SeenListToggleComponent', () => {
    let spectator: SpectatorHost<SeenListToggleComponent>;
    const createHost = createHostFactory({
        component: SeenListToggleComponent,
        providers: [
            {provide: SEEN_LIST_SERVICE}
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    beforeEach(() => {
        localStorage.clear();
    });

    describe('icon', () => {
        it('should be favorite_border with Add to favorites when media is not in the list', () => {
            spectator = createHost(`<seen-list-toggle [media]="media" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('mat-icon')).toHaveText('favorite_border');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Add to favorites');
        });

        it('should be favorite with Remove from favorites when media is in the list', () => {
            localStorage.setItem('seen-list', JSON.stringify([movies[0]]));
            spectator = createHost(`<seen-list-toggle [media]="media" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('mat-icon')).toHaveText('favorite');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Remove from favorites');
        });
    });

    describe('withText', () => {
        it('should display Add to favorites by default when withText is true', () => {
            spectator = createHost(`<seen-list-toggle [media]="media" [withText]="withText" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            expect(spectator.query('.seen-list-toggle_label')).toHaveText('Add to favorites');
        });

        it('should display no label when withText is false', () => {
            spectator = createHost(`<seen-list-toggle [media]="media" [withText]="withText" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: false,
                }
            });
            expect(spectator.query('.seen-list-toggle_label')).not.toExist();
        });
    });

    describe('toggle button', () => {
        it('should add the media to the list, change icon and text when clicked and media was not in the list', () => {
            spectator = createHost(`<seen-list-toggle [media]="media" [withText]="withText" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            spectator.click('.seen-list-toggle_button');
            expect(spectator.query('mat-icon')).toHaveText('favorite');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Remove from favorites');
            expect(spectator.query('.seen-list-toggle_label')).toHaveText('Remove from favorites');
        });

        it('should remove the media from the list, change icon and text when clicked and media was in the list', () => {
            localStorage.setItem('seen-list', JSON.stringify([movies[0]]));
            spectator = createHost(`<seen-list-toggle [media]="media" [withText]="withText" ></seen-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            spectator.click('.seen-list-toggle_button');
            expect(spectator.query('mat-icon')).toHaveText('favorite_border');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Add to favorites');
            expect(spectator.query('.seen-list-toggle_label')).toHaveText('Add to favorites');
        });
    });
});
