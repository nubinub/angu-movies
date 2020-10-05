import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMediasComponent } from './popular-medias.component';

describe('PopularMediasComponent', () => {
  let component: PopularMediasComponent;
  let fixture: ComponentFixture<PopularMediasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMediasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
