import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';
import movies from 'src/testing/data/movies-mock';

import { WatchListToggleComponent } from './watch-list-toggle.component';

describe('Component: WatchListToggleComponent', () => {
  let component: WatchListToggleComponent;
  let fixture: ComponentFixture<WatchListToggleComponent>;
  let watchListServiceSpy;

  beforeEach(async(() => {
    watchListServiceSpy = jasmine.createSpyObj('ListService', ['toggleMedia', 'hasMedia']);
    TestBed.configureTestingModule({
      declarations: [ WatchListToggleComponent ],
      providers: [
        {provide: WATCH_LIST_SERVICE, useValue: watchListServiceSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#toggleMedia', () => {
    it('should call list service toggleMedia and set toBeWatched', () => {
      component.media = movies[0];
      watchListServiceSpy.toggleMedia.and.returnValue(true);
      component.toggleMedia({preventDefault: () => {}, stopPropagation: () => {}});
      expect(watchListServiceSpy.toggleMedia).toHaveBeenCalledWith(movies[0]);
      expect(component.toBeWatched).toBe(true);
    });
  });

  describe('#ngOnChanges', () => {
    it('should update toBeWatched value', () => {
      component.media = movies[0];
      component.toBeWatched = false;
      watchListServiceSpy.hasMedia.and.returnValue(true);
      component.ngOnChanges();
      fixture.detectChanges();
      expect(component.toBeWatched).toBe(true);
    });
  });
});
