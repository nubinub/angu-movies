import { MediaDetailsDialogComponent } from './media-details-dialog.component';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import movies from 'src/testing/data/movies-mock';

describe('Component: MediaDetailsDialogComponent', () => {
    let spectator: Spectator<MediaDetailsDialogComponent>;
    const createComponent = createComponentFactory({
        component: MediaDetailsDialogComponent,
        declarations: [],
        providers: [
            {provide: MAT_DIALOG_DATA, useValue: {media: movies[0]}},
            mockProvider(MatDialogRef)
        ],
        shallow: true,
    });

    describe('close button', () => {
        it('should call mat dialog close', () => {
            spectator = createComponent({});
            spectator.click('.media-details-dialog_close-button');
            const spy = spectator.inject(MatDialogRef);
            expect(spy.close).toHaveBeenCalled();
        });
    });
});
