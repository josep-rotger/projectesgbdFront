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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddReviewModalComponent } from './add-review-modal/add-review-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { DataServices } from './data.services';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent, GameComponent, GameDetailsComponent, GameListComponent, ReviewComponent, AddReviewModalComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GameComponent },
      { path: 'game/:gameId', component: GameDetailsComponent }
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
  ],
  providers: [DataServices, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
