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
      this.gameService.getGames().subscribe((games) => {
      if (games && games.content) {
        this.games = games.content.filter((game: { id: any; }) => game.id !== this.gameId); // perque aixi em retorni tots els jocs menys l'actual
      } else {
        this.games = [];
      }
    });
  }
}
