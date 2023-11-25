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
    private baseUrl: string = "http://localhost:8080/apis/review";

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  
  addGameReview(gameId: number, review: Review): Observable<any> {
    const url = `${this.baseUrl}/addGameReview/${gameId}`;
    
    // Assuming you need to set some headers, adjust as needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, review, { headers });
  }
  openModal(): void {
    this.dialog.open(AddReviewModalComponent);
  }
}
