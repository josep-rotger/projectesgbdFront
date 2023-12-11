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
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit{
  faheart = faHeart;
  reviews: Review[] = [];
  estrelles = new Map<string, any>();
  gameID: string | undefined;
  userid: string | undefined | null;
  //estrelles: string[] = [];
  constructor(private reviewService: ReviewService, private dialogRef: MatDialog, private gameService: GameService, private location: Location, private loginService: LoginService) {
  }
  openDialog(gameID: string | undefined){
    this.dialogRef.open(AddReviewModalComponent,{
      data: {id:gameID, userID: this.userid},
    });
  }
  range(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  ngOnInit(): void {
      this.refreshGetReviews();
  }
   
    public refreshGetReviews(){
      const url = this.location.path(); // obtinc la URL completa
      const segments = url.split('/'); // divideixo la URL en segments
      if(this.loginService.isLogged()){
        console.log("Inicialitzat")
        console.log(this.loginService.getDisplayName());
        this.userid = this.loginService.getDisplayName();
      }
      const gameId = segments[segments.length - 1]; // obtinc el segment del final (ID del Game)
      //const gameId = +gameIdStr; // converteixo el ID a n
      if (gameId != null) {
        this.gameID = gameId;
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
