import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
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
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { MediasListComponent } from './components/medias-list/medias-list.component';
import { MediaPosterComponent } from './components/media-poster/media-poster.component';
import { TvShowInfoComponent } from './components/tv-show-info/tv-show-info.component';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './strategies/cache-route-reuse-strategy';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { MediaTitlePipe } from './pipes/media-title/media-title.pipe';
import { MediaDatePipe } from './pipes/media-date/media-date.pipe';
import { PopularMediasComponent } from './components/popular-medias/popular-medias.component';
import { MediaPosterPipe } from './pipes/media-poster/media-poster.pipe';
import { MediaBackdropPipe } from './pipes/media-backdrop/media-backdrop.pipe';
import { CastPosterPipe } from './pipes/cast-poster/cast-poster.pipe';
import { IMAGE_BASE_URL } from './tokens/image-base-url.token';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { MediaInfoComponent } from './components/media-info/media-info.component';
import { MediaTimePipe } from './pipes/media-time/media-time.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MediaDetailsDialogComponent } from './components/media-details-dialog/media-details-dialog.component';

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
    PopularMediasComponent,
    MediaPosterPipe,
    MediaBackdropPipe,
    CastPosterPipe,
    MediaDetailsComponent,
    MediaInfoComponent,
    MediaTimePipe,
    MediaDetailsDialogComponent,
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
    MatDialogModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy,
    },
    {provide: MOVIE_API_BASE_URL, useValue: 'https://api.themoviedb.org/3/'},
    {provide: IMAGE_BASE_URL, useValue: 'https://image.tmdb.org/'},
    RuntimePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
