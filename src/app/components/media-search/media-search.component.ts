import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { SearchParams } from 'src/app/model/search-params/search-params';
import EType, { types } from 'src/app/model/type/type-enum';

@Component({
  selector: 'media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent {
  public formGroup: FormGroup;

  public types: string[] = types;

  @Output() search: Observable<SearchParams>;

  constructor() {
    const yearControl = new FormControl({ disabled: true });
    const queryControl = new FormControl();
    const typeControl = new FormControl(EType.Movie);

    this.formGroup = new FormGroup({
      query: queryControl,
      year: yearControl,
      type: typeControl,
    });

    yearControl.disable({ emitEvent: false });

    this.setUpObservables();
  }

  setUpObservables() {
    const yearControl = this.formGroup.get('year');
    const queryControl = this.formGroup.get('query');
    const typeControl = this.formGroup.get('type');

    this.search = combineLatest(
      [
        queryControl.valueChanges.pipe(
          tap(
            (query) => query ? yearControl.enable({ emitEvent: false }) : yearControl.disable({ emitEvent: false })
          ),
          debounceTime(500),
          startWith(''),
        ),
        typeControl.valueChanges.pipe(
          startWith(EType.Movie)
        ),
        yearControl.valueChanges.pipe(
          debounceTime(500),
          map(
            year => parseInt(year, 10),
          ),
          startWith(NaN),
        ),
      ]
    ).pipe(
      map(
        ([query, type, year]) => ({ query, type, year })
      )
    );
  }
}
