import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewModalComponent } from './add-review-modal.component';
import { Review } from '../review/Review';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddReviewModalService {
    private baseUrl: string = "http://localhost:8080/apis/game";

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  
  addGameReview(gameId: string, review: Review) {
    const url = `${this.baseUrl}/addGameReview/${gameId}`;
    const { id, ...reviewWithoutId } = review;

    // Assuming you need to set some headers, adjust as needed
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
   
    this.http.post(url, reviewWithoutId, { headers })
      .subscribe(
         (response: any) => {
          console.log('POST request was successful', response);
          // Handle the response here, if needed
        },
        (error: any) => {
          console.error('POST request failed', error);
          // Handle the error here, if needed
        }
      );
    //return this.http.post(url, review, { headers });
  }
  openModal(): void {
    this.dialog.open(AddReviewModalComponent);
  }
}
