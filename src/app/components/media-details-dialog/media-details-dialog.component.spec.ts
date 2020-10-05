import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MediaDetailsDialogComponent } from './media-details-dialog.component';

describe('MediaDetailsDialogComponent', () => {
  let component: MediaDetailsDialogComponent;
  let fixture: ComponentFixture<MediaDetailsDialogComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);
    TestBed.configureTestingModule({
      declarations: [ MediaDetailsDialogComponent ],
      imports: [
        MatDialogModule
      ], providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: spy}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
