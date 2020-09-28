import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';

import { TvShowInfoComponent } from './tv-show-info.component';

describe('TvShowInfoComponent', () => {
  let component: TvShowInfoComponent;
  let fixture: ComponentFixture<TvShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowInfoComponent, ReleaseDatePipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
