import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasListComponent } from './medias-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: MediasListComponent', () => {
  let component: MediasListComponent;
  let fixture: ComponentFixture<MediasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
