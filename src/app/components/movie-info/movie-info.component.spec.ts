import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponent } from './movie-info.component';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieInfoComponent, RuntimePipe, ReleaseDatePipe ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
