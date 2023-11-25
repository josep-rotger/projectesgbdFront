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
  searchCompany: string = '';
  searchRating: number = -1;
  searchPrice: number = -1;
  stars = [
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: false },
    { value: 4, active: false },
    { value: 5, active: false }
  ];

  currentFilter: string = '';

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
  }

  resetFilters(): void {
    this.stars = [
      { value: 1, active: false },
      { value: 2, active: false },
      { value: 3, active: false },
      { value: 4, active: false },
      { value: 5, active: false }
    ];
    this.searchCompany = '';
    this.searchRating = -1;
    this.searchPrice = -1;
    this.currentFilter = '';
    this.reloadPage();
  }

  toggleStar(star: any): void {
    const starIndex = this.stars.indexOf(star);
    this.searchRating= 0;

    // desmarca les estrelles que hi havia abans
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].active = false;
    }

    // marca les estrelles
    for (let i = 0; i <= starIndex; i++) {
      this.stars[i].active = !this.stars[i].active;
      this.searchRating+=1;
    }

    this.applyFilters();
  }

  applyFilters(): void {
    switch (this.currentFilter.toLowerCase()) {
      case 'company':
        this.searchGames('Company', this.searchCompany);
        break;

      case 'price':
        this.searchGames('Price', this.searchPrice.toString());
        break;

      case 'rating':
        this.searchGames('Rating', this.searchRating.toString());
        break;

      default: // No hi ha cap filtre seleccionat
    }
  }

  searchGames(field: string, value: string): void {
    this.gameService.searchByFieldAndValue(field, value).subscribe(
      (jocIterable: Iterable<Game>) => {
        // convertir un iterable a un array
        this.games = Array.from(jocIterable);
        console.log("Mida Filtre: ", this.games.length);
      },
      error => {
        console.error('Error al buscar jocs:', error);
      }
    );
  }

  navigateToGameDetails(gameId: number): void {
    // navega a la pagina de detalls del joc utilitzant l'ID del joc
    this.router.navigate(['/game-details', gameId]);
  }

  reloadPage(): void {
    window.location.reload();
  }

  setFilterCompany(): void {
    this.currentFilter = 'company';
  }
  
  setFilterPrice(): void {
    this.currentFilter = 'price';
  }
  
  setFilterRating(): void {
    this.currentFilter = 'rating';
  }
}
