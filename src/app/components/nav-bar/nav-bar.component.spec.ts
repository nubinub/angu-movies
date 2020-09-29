import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';

import { NavBarComponent } from './nav-bar.component';

describe('Component: NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let scheduler: TestScheduler;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ NavBarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isMovieDetails$', () => {
    it('should emit true when NavigationEnd with matchin url', () => {
      scheduler.run(({expectObservable, cold}) => {
        (router as any).events = cold('a', {a: new NavigationEnd(1, 'movies/7', 'movies/7')});
        fixture.detectChanges();
        expectObservable(component.isMediaDetails$).toBe('a', {a: true});
      });
    });

    it('should emit false when NavigationEnd with non matching url', () => {
      scheduler.run(({expectObservable, cold}) => {
        (router as any).events = cold('a', {a: new NavigationEnd(1, 'movies/seen', 'movies/seen')});
        fixture.detectChanges();
        expectObservable(component.isMediaDetails$).toBe('a', {a: false});
      });
    });

    it('should emit only when NavigationEnd', () => {
      scheduler.run(({expectObservable, cold}) => {
        (router as any).events = cold('ab', {
          a: new NavigationStart(1, 'movies/seen'),
          b: new NavigationEnd(1, 'movies/seen', 'movies/seen')
        });
        fixture.detectChanges();
        expectObservable(component.isMediaDetails$).toBe('-b', {b: false});
      });
    });
  });
});
