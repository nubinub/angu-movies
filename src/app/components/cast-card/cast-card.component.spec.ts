import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';

import { CastCardComponent } from './cast-card.component';

describe('CastCardComponent', () => {
  let component: CastCardComponent;
  let fixture: ComponentFixture<CastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastCardComponent ],
      imports: [AppModule],
      providers: [
        { provide: MOVIE_API_BASE_URL, useValue: 'movie-api' },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
