import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediasComponent } from './views/medias/medias.component';
import { MovieComponent } from './views/movie/movie.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SeenListComponent } from './views/seen-list/seen-list.component';
import { WatchListComponent } from './views/watch-list/watch-list.component';
import { TvShowComponent } from './views/tv-show/tv-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/medias', pathMatch: 'full'},
  { path: 'medias/seen', component: SeenListComponent},
  { path: 'medias/watch', component: WatchListComponent},
  { path: 'medias', component: MediasComponent},
  { path: 'movies/:id', component:  MovieComponent},
  { path: 'tv/:id', component:  TvShowComponent},
  { path: 'settings', component:  SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
