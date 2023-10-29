import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
