import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import SearchParams from 'src/app/model/search-params/search-params';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

  public searchControl: FormControl = new FormControl();
  private searchControlSub: Subscription;

  @Output() search: EventEmitter<SearchParams> = new EventEmitter<SearchParams>();

  ngOnInit(): void {
    this.searchControlSub = this.searchControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (value) => {
        this.search.emit({query: value});
      }
    });
  }

  ngOnDestroy(): void {
    this.searchControlSub.unsubscribe();
  }
}
