import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesListComponent } from './views/favorites-list/favorites-list.component';
import { MediasComponent } from './views/medias/medias.component';
import { SettingsComponent } from './views/settings/settings.component';
import { WatchListComponent } from './views/watch-list/watch-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/medias', pathMatch: 'full'},
  { path: 'medias', component: MediasComponent},
  { path: 'medias/watch', component: WatchListComponent},
  { path: 'medias/favorites', component: FavoritesListComponent},
  { path: 'settings', component:  SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
