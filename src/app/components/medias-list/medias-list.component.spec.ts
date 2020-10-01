import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasListComponent } from './medias-list.component';
import movies from 'src/testing/data/movies-mock';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MediasListComponent', () => {
  let component: MediasListComponent;
  let fixture: ComponentFixture<MediasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
