import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../Game/Game.service';
import { Review } from './Review'
import { ReviewService } from './review.service';
import { Location } from '@angular/common';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { AddReviewModalComponent } from '../add-review-modal/add-review-modal.component';
import { AddReviewModalService } from '../add-review-modal/add-review-modal.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit{
  faheart = faHeart;
  reviews: Review[] = [];
  estrelles = new Map<string, any>();
  //estrelles: string[] = [];
  constructor(private reviewService: ReviewService, private dialogRef: MatDialog, private gameService: GameService, private location: Location, private router: Router) {
  }
  openDialog(){
    this.dialogRef.open(AddReviewModalComponent,{
      data: {id:""},
    });
  }
  range(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  ngOnInit(): void {
    
    const url = this.location.path(); // obtinc la URL completa
    const segments = url.split('/'); // divideixo la URL en segments

    const gameId = segments[segments.length - 1]; // obtinc el segment del final (ID del Game)
    //const gameId = +gameIdStr; // converteixo el ID a n
    if (gameId != null) {
      this.gameService.findAllReviewsByGameId(gameId).subscribe(
        (reviewIterable: Iterable<Review>) => {
          // converteix un iterable a un array
          this.reviews = Array.from(reviewIterable);
          console.log(this.reviews);
          for (const review of this.reviews) {
            console.log(review.id);
            this.estrelles.set(review.id, this.obtenirNumeroEstrelles(review.rating))
          }
          console.log(this.estrelles);
        },
        error => {
          console.error('Error al obtenir dades del joc:', error);
        }
      )
    }
   

    // this.reviewService.findAll().subscribe(
    //   (reviewIterable: Iterable<Review>) => {
    //     // converteix un iterable a un array
    //     this.review = Array.from(reviewIterable);
    //   },
    //   error => {
    //     console.error('Error al obtenir dades de la review:', error);
    //   }
    // );
  }
  obtenirNumeroEstrelles(rating:number): any[] {
    const estrelles = [];

    for (let i = 1; i <= 5; i++) {
      estrelles.push({ activa: i <= rating });
    }

    return estrelles;
  }
}

