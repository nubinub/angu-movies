import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediasComponent } from './views/medias/medias.component';
import { MovieComponent } from './views/movie/movie.component';
import { SeenMoviesComponent } from './views/seen-movies/seen-movies.component';
import { WatchMoviesComponent } from './views/watch-movies/watch-movies.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/medias', pathMatch: 'full'},
  { path: 'movies/seen', component: SeenMoviesComponent},
  { path: 'movies/watch', component: WatchMoviesComponent},
  { path: 'medias', component: MediasComponent},
  { path: 'movies/:id', component:  MovieComponent},
  { path: 'settings', component:  SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
