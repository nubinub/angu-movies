import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  public keyControl: FormControl = new FormControl();
  private keyControlSub: Subscription;

  constructor(private apiKeyService: ApiKeyService) {
  }

  ngOnInit(): void {
    this.keyControl.setValue(this.apiKeyService.getKey());

    this.keyControlSub = this.keyControl.valueChanges.subscribe({
      next: (value) => {
        this.apiKeyService.setKey(value);
      }
    });
  }

  ngOnDestroy(): void {
    this.keyControlSub.unsubscribe();
  }
}
