import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponent } from './movie-info.component';
import { RuntimePipe } from 'src/app/pipes/runtime.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date.pipe';
import { MockComponent } from 'ng-mocks';
import { MatIcon } from '@angular/material/icon';

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieInfoComponent, RuntimePipe, ReleaseDatePipe, MockComponent(MatIcon)]
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
