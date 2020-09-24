import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';

import { TvShowCardComponent } from './tv-show-card.component';

describe('TvShowCardComponent', () => {
  let component: TvShowCardComponent;
  let fixture: ComponentFixture<TvShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TvShowCardComponent,
        RuntimePipe,
        ReleaseDatePipe,
      ],
      providers: [
        {provide: IMAGE_BASE_URL, useValue: 'image-api'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
