import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';

import { TvShowComponent } from './tv-show.component';

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('TvShowService', ['getTvShow', 'getCast']);
    spy.getTvShow.and.returnValue(of(undefined));
    spy.getCast.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [ TvShowComponent ],
      providers: [
        {provide: TvShowService, useValue: spy},
        {provide: ActivatedRoute, useValue: {
          params: of({ id: 1 })
        }}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
