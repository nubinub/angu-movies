import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasComponent } from './medias.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';
import movies from 'src/testing/mock/movies-mock';
import { MediaService } from 'src/app/services/media/media.service';

describe('MediasComponent', () => {
  let component: MediasComponent;
  let fixture: ComponentFixture<MediasComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MediaService', ['search']);
    spy.search.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ MediasComponent ],
      providers: [{
        provide: MediaService, useValue: spy
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
