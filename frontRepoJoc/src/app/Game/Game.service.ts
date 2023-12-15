import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Game } from '../Game-details/Game';
import { Review } from '../review/Review';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  getGameDetails(gameId: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl: string = "http://localhost:8080/apis/game";

  constructor(private http: HttpClient) { }

  // retorna la part del final de la URL
  private getFullUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  setRating(gameId: string, gameRate: number) {
    const url = `${this.baseUrl}/setGameRating/${gameId}?rating=${gameRate}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    this.http.put(url, null, { headers })
        .subscribe(
            (response: any) => {
                // Handle the response here, if needed
            },
            (error: any) => {
                // Handle the error here, if needed
            }
        );
  }
  findAll(): Observable<Game[]> {
    const url = this.getFullUrl('findAll');
    return this.http.get<any>(url).pipe(
      map(response => response.content),
      catchError(error => {
        console.error('Error al obtenir dades del joc:', error);
        return throwError(error);
      })
    );
  }

  findById(id: string): Observable<Game> {
    const url = `${this.baseUrl}/findById/${id}`;
    return this.http.get<Game>(url);
  }

  findAllReviewsByGameId(id : string):Observable<Iterable<Review>> {
    const url = `${this.baseUrl}/findAllReviewsByGameId/${id}`;
    return this.http.get<Iterable<Review>>(url).pipe(
      catchError(error => {
        console.error('Error al obtenir dades del joc:', error);
        return throwError(error);
      })
    );
  }
  insertGame(game: Game): Observable<Game> {
    const url = this.getFullUrl('insert');
    return this.http.post<Game>(url, game);
  }

  updateGame(game: Game): Observable<Game> {
    const url = this.getFullUrl('update');
    return this.http.put<Game>(url, game);
  }

  deleteGame(id: string): Observable<Game> {
    const url = this.getFullUrl(`delete/${id}`);
    return this.http.delete<Game>(url);
  }
  
  searchByFieldAndValue(field: string, value: string): Observable<Game[]> {
    const url = `${this.baseUrl}/search?field=${field}&value=${value}`;
    return this.http.get<Game[]>(url);
  }

  searchGames(params: HttpParams): Observable<Iterable<Game>> {
    const url = `${this.baseUrl}/search`;
    return this.http.get<Iterable<Game>>(url, { params });
  }

}
