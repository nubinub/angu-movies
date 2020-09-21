import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { ApiKeyService } from 'src/app/services/api-key/api-key.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKey', ' setKey']);
    spy.getKey.and.returnValue('abcef');
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: ApiKeyService, useValue: spy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
