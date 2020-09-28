import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() drawerToggle: EventEmitter<void> = new EventEmitter<void>();

  isMovieDetails$: Observable<boolean>;

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.isMovieDetails$ = this.router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      ),
      map(
        (event: NavigationEnd) => !!event.url.match('movies/[0-9]+|tv/[0-9]+')
      )
    );
  }

  goBack(): void {
    this.location.back();
  }
}
