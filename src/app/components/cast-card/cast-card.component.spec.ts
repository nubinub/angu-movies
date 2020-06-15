import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCardComponent } from './cast-card.component';

describe('CastCardComponent', () => {
  let component: CastCardComponent;
  let fixture: ComponentFixture<CastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastCardComponent ]
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
