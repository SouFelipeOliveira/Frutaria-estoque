import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HeaderComponent],
  template: `
    <ion-app>
      <app-header />
      <ion-router-outlet></ion-router-outlet>
    </ion-app>

  `
})
export class AppComponent {
  constructor() {}
}
