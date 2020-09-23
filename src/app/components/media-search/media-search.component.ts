import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { debounceTime, mergeAll, startWith } from 'rxjs/operators';
import SearchParams from 'src/app/model/search-params/search-params';
import EType, { types } from 'src/app/model/type/type-enum';

@Component({
  selector: 'media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent implements OnInit, OnDestroy {

  public searchControl: FormControl = new FormControl();
  private sub: Subscription;
  public typeControl: FormControl = new FormControl(EType.Movie);

  public types: string[] = types;

  @Output() search: EventEmitter<SearchParams> = new EventEmitter<SearchParams>();

  ngOnInit(): void {
    this.sub = combineLatest(
      [
        this.searchControl.valueChanges.pipe(
          debounceTime(500)
        ).pipe(
          startWith('')
        ),
        this.typeControl.valueChanges.pipe(
          startWith(EType.Movie)
        )
      ]
    ).subscribe(([query, type]) => this.search.emit({
      type,
      query,
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
