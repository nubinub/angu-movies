import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { ApiKeyService } from 'src/app/services/api-key/api-key.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let spy;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    spy = jasmine.createSpyObj('ApiKeyService', ['getKey', 'setKey']);
    spy.getKey.and.returnValue('abcef');
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: ApiKeyService, useValue: spy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#ngOnInt', () => {
    it('should call apiKeyService set value with all the consecutive values', () =>  {
      scheduler.run(({cold, flush}) => {
        spyOn(component.keyControl, 'setValue');
        (component.keyControl as any).valueChanges = cold('abc', {a: 'a', b: 'ab', c: 'abc'});
        fixture.detectChanges();
        flush();
        expect(spy.setKey).toHaveBeenCalledTimes(3);
        expect(spy.setKey).toHaveBeenCalledWith('a');
        expect(spy.setKey).toHaveBeenCalledWith('ab');
        expect(spy.setKey).toHaveBeenCalledWith('abc');
      });
    });
  });
});
