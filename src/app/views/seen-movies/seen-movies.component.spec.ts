import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenMoviesComponent } from './seen-movies.component';
import { SeenListService } from 'src/app/services/seen-list.service';
import { of } from 'rxjs';
import movies from 'src/app/mock/movies-mock';

describe('SeenMoviesComponent', () => {
  let component: SeenMoviesComponent;
  let fixture: ComponentFixture<SeenMoviesComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('SeenListService', ['getList']);
    spy.getList.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ SeenMoviesComponent ],
      providers: [
        {provide: SeenListService, use: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
