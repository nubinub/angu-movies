import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, scheduled } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { MediaService } from 'src/app/services/media/media.service';

import { MediaSearchComponent } from './media-search.component';

describe('MediaSearchComponent', () => {
  let component: MediaSearchComponent;
  let fixture: ComponentFixture<MediaSearchComponent>;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MediaService', ['getSearchFormObservable']);
    spy.getSearchFormObservable.and.returnValue(of());
    TestBed.configureTestingModule({
      declarations: [MediaSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MediaService, useValue: spy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    fixture = TestBed.createComponent(MediaSearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
