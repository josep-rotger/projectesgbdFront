import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../Game/Game.service';
import { Game } from './Game';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-details',
  templateUrl: './Game-details.component.html',
  styleUrls: ['./Game-details.component.css']
})
export class GameDetailsComponent {
  game: Game = new Game();
  estrelles: any[] = [];
  constructor(private route: ActivatedRoute, private gameService: GameService, private location: Location) {}

  goBack(): void {
    this.location.back();
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
          this.estrelles= this.obtenirNumeroEstrelles(this.game.rating);
        },
        error => {
          console.error('Error al obtenir els detalls del joc:', error);
        }
      );
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
