import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameService } from './Game.service';
import { Game } from './Game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './Game-list.component.html',
  styleUrls: ['./Game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  currentUrl: string;
  gameId: string = "";
  genre: string = "";


  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    const segments = this.currentUrl.split('/'); // divideixo la URL en segments
    const gameIdStr = segments[segments.length - 1]; // obtinc el segment del final (ID del Game)
    this.gameId = gameIdStr; // converteixo el ID a numero
    this.loadGameData();
  }

  private loadGameData(): void {
    if (this.gameId !== null) {
      this.gameService.findById(this.gameId).subscribe(
        (game: { genre: string[]; }) => {
          const genres = game.genre || [];
          
          const selectedGenre = genres.length > 0 ? genres[0] : '';
  
          this.gameService.getGamesByGenre(selectedGenre).subscribe((games) => {
            if (games && games.length) {
              this.games = games.filter((game) => game.id !== this.gameId).slice(0, 8);
            } else {
              this.games = [];
            }
          });
        },
        (error: any) => {
          console.error('Error al obtenir detalls del joc:', error);
        }
      );
    }
  }

  reloadPage(gameId: string): void {
    this.router.navigateByUrl(`/game-details/${gameId}`).then(() => {
      window.location.href = this.router.url;
    });
  }
}
