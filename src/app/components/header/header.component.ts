import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router) { }

  navigateToEstoque() {
    this.router.navigate(['/estoque'])
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }

  ngOnInit() {}

}
