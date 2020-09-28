import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Cast from 'src/app/model/cast/cast';
import TvShow from 'src/app/model/tv-show/tv-show';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  /**
   * @internal
   */
  public data$: Observable<[TvShow, Cast[]]>;

  constructor(private tvShowService: TvShowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap(
        params => combineLatest(
          [
            this.tvShowService.getTvShow(params.id),
            this.tvShowService.getCast(params.id),
          ]
        )
      )
    );
  }
}
