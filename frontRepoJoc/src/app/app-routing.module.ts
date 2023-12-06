import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './Game/Game.component';
import { GameDetailsComponent } from './Game-details/Game-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'games', component: GameComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
