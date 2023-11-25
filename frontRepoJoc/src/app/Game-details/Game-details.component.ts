import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../Game/Game.service';
import { Game } from './Game';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Review } from '../review/Review';

@Component({
  selector: 'app-game-details',
  templateUrl: './Game-details.component.html',
  styleUrls: ['./Game-details.component.css']
})
export class GameDetailsComponent {
  game: Game = new Game();
  reviews: Review[] = [];
  estrelles: any[] = [];
  gameRate: number = 0;
  constructor(private route: ActivatedRoute, private gameService: GameService, private location: Location, private router: Router) {}

  goBack(): void {
    this.router.navigate(['/games']);
  }

  ngOnInit() {
    const url = this.location.path(); // obtinc la URL completa
    const segments = url.split('/'); // divideixo la URL en segments

    const gameIdStr = segments[segments.length - 1]; // obtinc el segment del final (ID del Game)
    const gameId = +gameIdStr; // converteixo el ID a numero

    if (!isNaN(gameId)) {
      // si ID valid, crido al Service per obtenir els details del Game
      this.gameService.findById(gameId).subscribe(
        (game: Game) => {
          this.game = game;
        },
        error => {
          console.error('Error al obtenir els detalls del joc:', error);
        }
      );
      this.gameService.findAllReviewsByGameId(gameId).subscribe(
        
        (reviewIterable: Iterable<Review>) => {
          let rating = 0;
          // converteix un iterable a un array
          this.reviews = Array.from(reviewIterable);
          for (const review of this.reviews) {
            // Access the 'rating' property of the review and add it to this.reviews
            rating += review.rating;
          }
          this.gameRate = rating/this.reviews.length;
          
          this.estrelles= this.obtenirNumeroEstrelles(this.gameRate);

        },
        error => {
          console.error('Error al obtenir dades del joc:', error);
        }
      )
    } else {
      console.error('ID del joc no valid:', gameId);
    }
  }

  obtenirNumeroEstrelles(rating:number): any[] {
    const estrelles = [];

    for (let i = 1; i <= 5; i++) {
      estrelles.push({ activa: i <= rating });
    }

    return estrelles;
  }
}
