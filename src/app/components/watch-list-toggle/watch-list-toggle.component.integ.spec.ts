import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import movies from 'src/testing/data/movies-mock';
import { WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';
import { WatchListToggleComponent } from './watch-list-toggle.component';

describe('Component: SeenListToggleComponent', () => {
    let spectator: SpectatorHost<WatchListToggleComponent>;
    const createHost = createHostFactory({
        component: WatchListToggleComponent,
        providers: [
            {provide: WATCH_LIST_SERVICE}
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    beforeEach(() => {
        localStorage.clear();
    });

    describe('icon', () => {
        it('should be visibility with Add to watch list when media is not in the list', () => {
            spectator = createHost(`<watch-list-toggle [media]="media" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('mat-icon')).toHaveText('visibility');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Add to watch list');
        });

        it('should be visibility_off with Remove from watch list when media is in the list', () => {
            localStorage.setItem('watch-list', JSON.stringify([movies[0]]));
            spectator = createHost(`<watch-list-toggle [media]="media" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                }
            });
            expect(spectator.query('mat-icon')).toHaveText('visibility_off');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Remove from watch list');
        });
    });

    describe('withText', () => {
        it('should display Add to watch list by default when withText is true', () => {
            spectator = createHost(`<watch-list-toggle [media]="media" [withText]="withText" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            expect(spectator.query('.watch-list-toggle_label')).toHaveText('Add to watch list');
        });

        it('should display no label when withText is false', () => {
            spectator = createHost(`<watch-list-toggle [media]="media" [withText]="withText" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: false,
                }
            });
            expect(spectator.query('.watch-list-toggle_label')).not.toExist();
        });
    });

    describe('toggle button', () => {
        it('should add the media to the list, change icon and text when clicked and media was not in the list', () => {
            spectator = createHost(`<watch-list-toggle [media]="media" [withText]="withText" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            spectator.click('.watch-list-toggle_button');
            expect(spectator.query('mat-icon')).toHaveText('visibility_off');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Remove from watch list');
            expect(spectator.query('.watch-list-toggle_label')).toHaveText('Remove from watch list');
        });

        it('should remove the media from the list, change icon and text when clicked and media was in the list', () => {
            localStorage.setItem('watch-list', JSON.stringify([movies[0]]));
            spectator = createHost(`<watch-list-toggle [media]="media" [withText]="withText" ></watch-list-toggle>`, {
                hostProps: {
                    media: movies[0],
                    withText: true,
                }
            });
            spectator.click('.watch-list-toggle_button');
            expect(spectator.query('mat-icon')).toHaveText('visibility');
            expect(spectator.query('mat-icon').getAttribute('matToolTip')).toBe('Add to watch list');
            expect(spectator.query('.watch-list-toggle_label')).toHaveText('Add to watch list');
        });
    });
});
