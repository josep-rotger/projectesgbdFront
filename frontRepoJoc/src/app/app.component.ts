import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showDetails = this.router.isActive('/game-details', false);
      }
    });
  }

  //metode per mostrar la llista de jocs
  showGamesList(): void {
    this.showDetails = false;
    this.router.navigate(['/games']);
  }
}
