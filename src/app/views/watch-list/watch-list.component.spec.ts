import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListComponent } from './watch-list.component';

describe('WatchListComponent', () => {
  let component: WatchListComponent;
  let fixture: ComponentFixture<WatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
