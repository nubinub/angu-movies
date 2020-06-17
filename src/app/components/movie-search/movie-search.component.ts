import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  public searchControl: FormControl = new FormControl();
  private searchControlSub: Subscription;

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchControlSub = this.searchControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (value) => {
        this.onChange.emit(value);
      }
    });
  }

  ngOnDestroy(): void {
    this.searchControlSub.unsubscribe();
  }
}
