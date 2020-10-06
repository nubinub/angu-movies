import { MediaDetailsDialogComponent } from './media-details-dialog.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import movies from 'src/testing/data/movies-mock';

describe('Component: MediaDetailsDialogComponent', () => {
    let spectator: Spectator<MediaDetailsDialogComponent>;
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const createComponent = createComponentFactory({
        component: MediaDetailsDialogComponent,
        declarations: [],
        providers: [
            {provide: MAT_DIALOG_DATA, useValue: {media: movies[0]}},
            {provide: MatDialogRef, useValue: spy }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    describe('close button', () => {
        it('should call mat dialog close', () => {
            spectator = createComponent({});
            spectator.click('.media-details-dialog_close-button');
            expect(spy.close).toHaveBeenCalled();
        });
    });
});
