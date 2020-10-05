import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'ngm-fav',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/fav.svg')
    );
  }

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
