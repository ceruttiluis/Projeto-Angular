import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }
    userModel = new User ();
    receberDados() {this.loginService.login (this.userModel).subscribe((response) => {
      console.log("Deu certo") 
        this.router.navigateByUrl("/")

      }, (erro) => {
        alert(erro.error)
        console.log(erro)
      
      })

    }
}


// console.log(this.userModel)
