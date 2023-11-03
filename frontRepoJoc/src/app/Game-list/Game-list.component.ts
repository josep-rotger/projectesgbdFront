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
  gameId: number = -1;
  genre: string = 'Construcció';


  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    const segments = this.currentUrl.split('/'); // divideixo la URL en segments
    const gameIdStr = segments[segments.length - 1]; // obtinc el segment del final (ID del Game)
    this.gameId = +gameIdStr; // converteixo el ID a numero
    this.loadGameData();
  }

  private loadGameData(): void {
    if (this.gameId !== -1) {
      this.gameService.findById(this.gameId).subscribe(
        (game: { genre: string[]; }) => {
          const genres = game.genre || [];
          // Aquí puedes manejar el caso en que `genres` sea un array, por ejemplo, seleccionando el primer género.
          const selectedGenre = genres.length > 0 ? genres[0] : '';
  
          this.gameService.getGamesByGenre(selectedGenre).subscribe((games) => {
            if (games && games.length) {
              this.games = games.filter((game) => game.id !== this.gameId);
            } else {
              this.games = [];
            }
          });
        },
        (error: any) => {
          console.error('Error al obtener detalles del juego:', error);
        }
      );
    }
  }

  reloadPage(gameId: number): void {
    this.router.navigateByUrl(`/game-details/${gameId}`).then(() => {
      window.location.href = this.router.url;
    });
  }
}
