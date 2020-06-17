import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RuntimePipe } from './pipes/runtime.pipe';
import { ReleaseDatePipe } from './pipes/release-date.pipe';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesComponent } from './views/movies/movies.component';
import { MovieComponent } from './views/movie/movie.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { CastCardComponent } from './components/cast-card/cast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    RuntimePipe,
    ReleaseDatePipe,
    MoviesListComponent,
    MoviesComponent,
    MovieComponent,
    MoviePosterComponent,
    MovieInfoComponent,
    CastCardComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
