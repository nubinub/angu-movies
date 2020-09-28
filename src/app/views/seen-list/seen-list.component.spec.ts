import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenListComponent } from './seen-list.component';
import { of } from 'rxjs';
import movies from 'src/testing/mock/movies-mock';
import { ListService } from 'src/app/services/list/list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from 'src/app/app.module';

describe('SeenListComponent', () => {
  let component: SeenListComponent;
  let fixture: ComponentFixture<SeenListComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ListService', ['getList']);
    spy.getList.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ SeenListComponent ],
      imports: [
        AppModule
      ],
      providers: [
        {provide: ListService, use: spy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
