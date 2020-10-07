import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import movies from 'src/testing/data/movies-mock';
import { MediaDetailsDialogComponent } from '../media-details-dialog/media-details-dialog.component';

import { MediaCardComponent } from './media-card.component';

describe('Component: MediaCardComponent', () => {
  let component: MediaCardComponent;
  let fixture: ComponentFixture<MediaCardComponent>;
  let matDialogSpy;

  beforeEach(async(() => {
    matDialogSpy = jasmine.createSpyObj(MatDialog, ['open']);
    TestBed.configureTestingModule({
      declarations: [ MediaCardComponent, MediaTitlePipe, ReleaseDatePipe, MediaDatePipe ],
      imports: [
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCardComponent);
    component = fixture.componentInstance;
    component.media = movies[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#openDetails', () => {
    it('should cancel event propagation', () => {
      const event = {stopPropagation: () => {}, preventDefault: () => {}};
      const stopPropagation = spyOn(event, 'stopPropagation');
      const preventDefault = spyOn(event, 'preventDefault');
      component.openDetails(event);
      expect(stopPropagation).toHaveBeenCalled();
      expect(preventDefault).toHaveBeenCalled();
    });

    it('should open matDialog  with current media', () => {
      const event = {stopPropagation: () => {}, preventDefault: () => {}};
      component.openDetails(event);
      expect(matDialogSpy.open).toHaveBeenCalledWith(MediaDetailsDialogComponent, {
        data: {
          media: movies[0],
        },
        width: '100%',
        panelClass: 'custom-dialog-container',
        autoFocus: false,
      });
    });
  });
});
