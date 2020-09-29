import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import EType from 'src/app/model/type/type-enum';

import { MediaSearchComponent } from './media-search.component';

describe('MediaSearchComponent', () => {
  let component: MediaSearchComponent;
  let fixture: ComponentFixture<MediaSearchComponent>;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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

  describe('#new', () => {
    it('should be movie type by default and have an empty query field', async () => {
      fixture.detectChanges();
      scheduler.run(({expectObservable}) => {
        expectObservable(component.search).toBe('a', {
          a: {query: '', type: EType.Movie, year: NaN},
        });
      });
    });
  });

  describe('#setUpObservables', () => {
    it('should wait 500ms before emitting query changes', () => {
      scheduler.run(({expectObservable, cold}) => {
        (component.formGroup.get('query') as any).valueChanges = cold('ab', {a: 'custom', b: 'custom-query'});
        component.setUpObservables();
        fixture.detectChanges();
        expectObservable(component.search).toBe('a 500ms b', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: 'custom-query', type: EType.Movie, year: NaN},
        });
      });
    });

    it('should wait 500ms before emitting year changes and parse it into number', () => {
      scheduler.run(({expectObservable, cold}) => {
        (component.formGroup.get('year') as any).valueChanges = cold('abcd', {a: '2', b: '20', c: '202', d: '2020'});
        component.setUpObservables();
        fixture.detectChanges();
        expectObservable(component.search).toBe('a-- 500ms b)', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: '', type: EType.Movie, year: 2020},
        });
      });
    });

    it('should change the media type', () => {
      scheduler.run(({expectObservable, cold}) => {
        (component.formGroup.get('type') as any).valueChanges = cold('-a', {a: EType.TvShow});
        component.setUpObservables();
        fixture.detectChanges();
        expectObservable(component.search).toBe('ab', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: '', type: EType.TvShow, year: NaN},
        });
      });
    });
  });
});
