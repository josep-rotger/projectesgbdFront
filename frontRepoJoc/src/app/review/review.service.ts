import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Review } from './Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  getReviewDetails(reviewId: number) {
    throw new Error('Method not implemented.');
  }
  private baseUrl: string = "http://localhost:8080/apis/review";

  constructor(private http: HttpClient) { }

  // retorna la part del final de la URL
  private getFullUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  findAll(): Observable<Review[]> {
    const url = this.getFullUrl('findAll');
    return this.http.get<any>(url).pipe(
      map(response => response.content),
      catchError(error => {
        console.error('Error al obtenir dades de la review:', error);
        return throwError(error);
      })
    );
  }

  insertReview(review: Review): Observable<Review> {
    const url = this.getFullUrl('insert');
    return this.http.post<Review>(url, review);
  }

  updateReview(review: Review): Observable<Review> {
    const url = this.getFullUrl('update');
    return this.http.put<Review>(url, review);
  }

  deleteReview(id: number): Observable<Review> {
    const url = this.getFullUrl(`delete/${id}`);
    return this.http.delete<Review>(url);
  }

}
