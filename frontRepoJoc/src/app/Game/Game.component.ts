import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../Game-details/Game'
import { GameService } from './Game.service';
import { Review } from '../review/Review';

@Component({
  selector: 'app-joc',
  templateUrl: './Game.component.html',
  styleUrls: ['./Game.component.css']
})
export class GameComponent implements OnInit{
  
  games: Game[] = [];
  reviews: Review[] = [];

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.gameService.findAll().subscribe(
      (jocIterable: Iterable<Game>) => {
        // converteix un iterable a un array
        this.games = Array.from(jocIterable);
      },
      error => {
        console.error('Error al obtenir dades del joc:', error);
      }
    );
    this.gameService.findAllReviewsByGameId().subscribe(
      (reviewIterable: Iterable<Review>) => {
        // converteix un iterable a un array
        this.reviews = Array.from(reviewIterable);
      },
      error => {
        console.error('Error al obtenir dades del joc:', error);
      }
    )
  }

  navigateToGameDetails(gameId: number): void {
    // navega a la pagina de detalls del joc utilitzant l'ID del joc
    this.router.navigate(['/game-details', gameId]);
  }
}
