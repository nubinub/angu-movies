import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Cast from 'src/app/model/cast/cast';
import TvShow from 'src/app/model/tv-show/tv-show';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  public tvShow: TvShow;

  public casts: Cast[] = [];

  constructor(private tvShowService: TvShowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tvShowService.getTvShow(params.id).subscribe(
        {
          next: (tvShow) => {
            this.tvShow = tvShow;
          }
        }
      );

      this.tvShowService.getCast(params.id).subscribe(
        {
          next: (cast) => {
            this.casts = cast.slice(0, 5);
          }
        }
      );
    });
  }
}
