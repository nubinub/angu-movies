import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasListComponent } from './medias-list.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import movies from 'src/testing/mock/movies-mock';
import { By } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie/movie.service';
import { of } from 'rxjs';

describe('MediasListComponent', () => {
  let component: MediasListComponent;
  let fixture: ComponentFixture<MediasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasListComponent, MockComponent(MovieCardComponent)],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render n movie-card', () => {
    component.items = movies;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('movie-card'));
    expect(cards.length).toEqual(movies.length);
  });
});
