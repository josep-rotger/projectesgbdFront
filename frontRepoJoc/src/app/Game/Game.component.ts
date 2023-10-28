import { Component, OnInit } from '@angular/core';
import { Game } from './Game'
import { GameService } from './Game.service';

@Component({
  selector: 'app-joc',
  templateUrl: './Game.component.html',
  styleUrls: ['./Game.component.css']
})
export class GameComponent implements OnInit{
  
  games: Game[] = [];

  constructor(private gameService:GameService) {}

  ngOnInit(): void {
    this.gameService.findAll().subscribe(
      (jocIterable: Iterable<Game>) => {
        // Convierte el Iterable a un array
        this.games = Array.from(jocIterable);
      },
      error => {
        console.error('Error al obtenir dades del joc:', error);
      }
    );
  }
}
