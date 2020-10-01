import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';
import movies from 'src/testing/data/movies-mock';

import { SeenListToggleComponent } from './seen-list-toggle.component';

describe('Component: SeenListToggleComponent', () => {
  let component: SeenListToggleComponent;
  let fixture: ComponentFixture<SeenListToggleComponent>;
  let listServiceSpy;

  beforeEach(async(() => {
    listServiceSpy = jasmine.createSpyObj('ListService', ['toggleMedia']);
    TestBed.configureTestingModule({
      declarations: [ SeenListToggleComponent ],
      providers: [
        {provide: SEEN_LIST_SERVICE, useValue: listServiceSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#toggleMedia', () => {
    it('should call list service toggleMedia and set hasBeenSeen', () => {
      component.media = movies[0];
      listServiceSpy.toggleMedia.and.returnValue(true);
      component.toggleMedia();
      expect(listServiceSpy.toggleMedia).toHaveBeenCalledWith(movies[0]);
      expect(component.hasBeenSeen).toBe(true);
    });
  });
});
