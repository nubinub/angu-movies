import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenListToggleComponent } from './seen-list-toggle.component';

describe('SeenMoviesToggleComponent', () => {
  let component: SeenListToggleComponent;
  let fixture: ComponentFixture<SeenListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenListToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
