import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediasComponent } from './views/medias/medias.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/medias', pathMatch: 'full'},
  { path: 'medias', component: MediasComponent},
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
