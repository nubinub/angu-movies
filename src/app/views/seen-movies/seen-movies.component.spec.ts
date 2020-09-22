import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenMoviesComponent } from './seen-movies.component';
import { of } from 'rxjs';
import movies from 'src/testing/mock/movies-mock';
import { ListService } from 'src/app/services/list/list.service';

describe('SeenMoviesComponent', () => {
  let component: SeenMoviesComponent;
  let fixture: ComponentFixture<SeenMoviesComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ListService', ['getList']);
    spy.getList.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ SeenMoviesComponent ],
      providers: [
        {provide: ListService, use: spy}
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
