import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, pipe, tap, throwError } from 'rxjs';
import { Game } from './Game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = "http://localhost:8080/apis/game";

  constructor(private http: HttpClient) {}

  getGamesByGenre(genre: string): Observable<Game[]> {
    const url = `${this.apiUrl}/findByGenre/${genre}`;
    return this.http.get<Game[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  
  findById(id: string): Observable<Game> {
    const url = `${this.apiUrl}/findById/${id}`;
    return this.http.get<Game>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud:', error);
    return throwError('Algo ha sortit malament');
  }
  
}
