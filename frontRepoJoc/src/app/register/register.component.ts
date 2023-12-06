import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    
  }

  register(form:NgForm){
    const email=form.value.email

    const password=form.value.password

    const confirmPassword=form.value.confirmPassword

    this.loginService.register(email, password, confirmPassword);
    
  }

}
