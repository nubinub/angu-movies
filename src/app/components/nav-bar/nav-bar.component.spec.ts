import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';
import { SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

import { NavBarComponent } from './nav-bar.component';

describe('Component: NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let scheduler: TestScheduler;
  let router: Router;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ListService', ['getList']);
    spy.getList.and.returnValue([]);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ NavBarComponent ],
      providers: [
        {provide: SEEN_LIST_SERVICE, useValue: spy}
      ],
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
});
