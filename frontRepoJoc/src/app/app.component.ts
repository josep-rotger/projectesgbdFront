import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;

  constructor(private router: Router, private loginService:LoginService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showDetails = this.router.isActive('/game-details', false);
      }
    });
  }

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyCr7r8kHOoaPC24TQG1rfE94ieFLzACDtY",

      authDomain: "sgbd-cd49c.firebaseapp.com",
      
    });
    var mySpan = document.getElementById('nameUser');
    // Set the text content of the span
    if(mySpan){
      mySpan.textContent = localStorage.getItem("username");
    }
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  logout(){
    var mySpan = document.getElementById('nameUser');
    localStorage.removeItem("username");
      // Set the text content of the span
    if(mySpan){
        mySpan.textContent = "";
    }
    this.loginService.logout();
  }

  //metode per mostrar la llista de jocs
  showGamesList(): void {
    this.showDetails = false;
    this.router.navigate(['/games']);
  }
}
