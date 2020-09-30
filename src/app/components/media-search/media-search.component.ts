import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchParams } from 'src/app/model/search-params/search-params';
import EType, { types } from 'src/app/model/type/type-enum';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent {
  public formGroup: FormGroup;

  public types: string[] = types;

  @Output() search: Observable<SearchParams>;

  constructor(private mediaService: MediaService) {
    const yearControl = new FormControl({ disabled: true });
    const queryControl = new FormControl();
    const typeControl = new FormControl(EType.Movie);

    this.formGroup = new FormGroup({
      query: queryControl,
      year: yearControl,
      type: typeControl,
    });

    yearControl.disable({ emitEvent: false });

    this.search = this.mediaService.getSearchFormObservable(queryControl, yearControl, typeControl);
  }
}
