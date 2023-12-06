import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './Game/Game.component';
import { GameDetailsComponent } from './Game-details/Game-details.component';


const routes: Routes = [
  { path: 'games', component: GameComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
  // ... otras rutas ...
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
