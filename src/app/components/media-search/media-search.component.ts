import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { SearchParams } from 'src/app/model/search-params/search-params';
import EType, { types } from 'src/app/model/type/type-enum';

@Component({
  selector: 'media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent implements OnInit, OnDestroy {

  public searchControl: FormControl = new FormControl();
  public yearControl: FormControl = new FormControl();
  private sub: Subscription = new Subscription();
  public typeControl: FormControl = new FormControl(EType.Movie);

  public types: string[] = types;

  @Output() search: EventEmitter<SearchParams> = new EventEmitter<SearchParams>();

  ngOnInit(): void {
    const searchSubscription = combineLatest(
      [
        this.searchControl.valueChanges.pipe(
          debounceTime(500),
          startWith(''),
        ),
        this.typeControl.valueChanges.pipe(
          startWith(EType.Movie)
        ),
        this.yearControl.valueChanges.pipe(
          debounceTime(500),
          map(
            year => parseInt(year, 10),
          ),
          startWith(NaN),
        )
      ]
    ).subscribe(([query, type, year]) => {
      this.search.emit({
        type,
        query,
        year,
      });
    });

    const disableSuscription = this.searchControl.valueChanges.subscribe((query) => {
      if (query) {
        this.yearControl.enable({emitEvent: false});
      } else {
        this.yearControl.disable({emitEvent: false});
      }
    });

    this.sub.add(disableSuscription).add(searchSubscription);

    this.yearControl.disable({emitEvent: false});
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
