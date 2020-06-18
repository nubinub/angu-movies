import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() drawerToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  isMovieDetailPage(): boolean  {
    return !!this.router.url.match('movies/[0-9]+');
  }

  goBack(): void {
    this.location.back();
  }
}
