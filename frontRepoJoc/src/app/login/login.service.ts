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
            const user = firebase.auth().currentUser;
            if (user) {
              const displayName = user.displayName || '';
              localStorage.setItem('username', displayName);
              var userspan = document.getElementById('nameUser');
              if(userspan){
                userspan.textContent = localStorage.getItem("username")
              }
            }
            this.router.navigate(['/']);
          }
        )
      }
    );
  }

  // register(email:string, password:string, confirmPassword:string) {
  //   if(password == confirmPassword){
  //     return firebase.auth().createUserWithEmailAndPassword(email, password).then(
      
  //     response => {
  //       response.additionalUserInfo?.username
  //       this.login(email, password);
  //     }
  //     )
  //     .catch(error => {
  //       this.window.alert('Error: ' + error.message);
  //     });
  //   }
  //   else{
  //     this.window.alert('Error: Passwords don\'t match');
  //     return -1;
  //   }
  // }
  register(email:string, password:string, confirmPassword:string, username:string) {
    if (password === confirmPassword) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          
          this.setDisplayName(username, email, password);
          //localStorage.setItem('username', username);
          // You can also call this.login inside setDisplayName if needed
          //this.login(email, password);
          
        })
        .catch(error => {
          window.alert('Error: ' + error.message);
        });
    } else {
      window.alert('Error: Passwords don\'t match');
      return -1;
    }
  }
  
  setDisplayName(displayName: string, email:string, password:string): Promise<void> {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
  
      if (user) {
        user.updateProfile({
          displayName: displayName
        }).then(() => {
          console.log('Display name set successfully');
          this.login(email, password);
          
          resolve(); // Resolve the promise on success
        }).catch(error => {
          console.error('Error setting display name: ', error);
          reject(error); // Reject the promise on error
        });
      } else {
        console.error('No user is currently logged in');
        reject(new Error('No user is currently logged in')); // Reject the promise if no user is logged in
      }
    });
  }
  getDisplayName(){
    return firebase.auth().currentUser?.email;
  }
  getIdToken(){
    return this.token;
  }

  isLogged(){
    return this.token;
  }
  checkLoginStatus(){
    if(this.isLogged() != null){
      return true;
    }
    else{
      return false;
    }
  }
  
  logout(){
    firebase.auth().signOut().then(()=>{

      this.token="";
      this.window.localStorage.removeItem('token'); // Eliminar el token de localStorage
      this.router.navigate(['/']);

    });
  }

}