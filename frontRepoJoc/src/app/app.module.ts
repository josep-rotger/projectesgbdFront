import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Game/Game.component';
import { GameDetailsComponent } from './Game-details/Game-details.component';
import { RouterModule } from '@angular/router';
import { GameListComponent } from './Game-list/Game-list.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent, GameComponent, GameDetailsComponent, GameListComponent, ReviewComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GameComponent },
      { path: 'game/:gameId', component: GameDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
