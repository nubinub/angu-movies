import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListToggleComponent } from './watch-list-toggle.component';

describe('WatchListToggleComponent', () => {
  let component: WatchListToggleComponent;
  let fixture: ComponentFixture<WatchListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListToggleComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
