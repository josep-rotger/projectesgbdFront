import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";

import 'firebase/compat/auth'


@Injectable()
export class LoginService{

  constructor(private router:Router){
    this.token = window.localStorage.getItem('token') || ''; // Recuperar el token de localStorage
    this.window = window;
  }
  
  token:string;

  window: Window;

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.window.localStorage.setItem('token', token); // Emmagatzemar el token en localStorage
            this.router.navigate(['/']);
          }
        )
      }
    );
  }

  register(email:string, password:string, confirmPassword:string) {
    if(password == confirmPassword){
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(
      
      response => {
        this.login(email, password);
      }
      )
      .catch(error => {
        this.window.alert('Error: ' + error.message);
      });
    }
    else{
      this.window.alert('Error: Passwords don\'t match');
      return -1;
    }
  }

  getIdToken(){
    return this.token;
  }

  isLogged(){
    return this.token;
  }

  logout(){
    firebase.auth().signOut().then(()=>{

      this.token="";
      this.window.localStorage.removeItem('token'); // Eliminar el token de localStorage
      this.router.navigate(['/']);

    });
  }

}