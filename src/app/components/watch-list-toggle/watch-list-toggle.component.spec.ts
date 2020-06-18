import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListToggleComponent } from './watch-list-toggle.component';

describe('WatchListToggleComponent', () => {
  let component: WatchListToggleComponent;
  let fixture: ComponentFixture<WatchListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListToggleComponent ]
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
