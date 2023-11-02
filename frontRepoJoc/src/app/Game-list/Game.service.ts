import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, pipe, tap, throwError } from 'rxjs';
import { Game } from './Game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = "http://localhost:8080/apis/game/findAll";

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud:', error);
    // Puedes manejar el error según tus necesidades
    return throwError('Algo salió mal; por favor, inténtalo de nuevo más tarde.');
  }
  
}
