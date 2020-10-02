import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RuntimePipe } from './pipes/runtime/runtime.pipe';
import { ReleaseDatePipe } from './pipes/release-date/release-date.pipe';
import { MediasComponent } from './views/medias/medias.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { CastCardComponent } from './components/cast-card/cast-card.component';
import { MediaSearchComponent } from './components/media-search/media-search.component';
import { WatchListToggleComponent } from './components/watch-list-toggle/watch-list-toggle.component';
import { SeenListToggleComponent } from './components/seen-list-toggle/seen-list-toggle.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsComponent } from './views/settings/settings.component';
import { MOVIE_API_BASE_URL } from './services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from './services/poster/poster.service';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { MediasListComponent } from './components/medias-list/medias-list.component';
import { MediaPosterComponent } from './components/media-poster/media-poster.component';
import { TvShowInfoComponent } from './components/tv-show-info/tv-show-info.component';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './strategies/cache-route-reuse-strategy';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { MediaTitlePipe } from './pipes/media-title/media-title.pipe';
import { MediaDatePipe } from './pipes/media-date/media-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    RuntimePipe,
    ReleaseDatePipe,
    MediasListComponent,
    MediasComponent,
    MediaPosterComponent,
    MovieInfoComponent,
    CastCardComponent,
    MediaSearchComponent,
    WatchListToggleComponent,
    SeenListToggleComponent,
    NavBarComponent,
    SettingsComponent,
    TvShowCardComponent,
    TvShowInfoComponent,
    MediaCardComponent,
    MediaTitlePipe,
    MediaDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy,
    },
    {provide: MOVIE_API_BASE_URL, useValue: 'https://api.themoviedb.org/3/'},
    {provide: IMAGE_BASE_URL, useValue: 'https://image.tmdb.org/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
