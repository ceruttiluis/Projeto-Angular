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

    mensagem = "";

    receberDados() {
      console.log("Modelo:", this.userModel)

      const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group", "by ", "insert ", "exec ", "\" ", "\' ", "-- ", "# ", "* ", "; "]

      listaPalavras.forEach(palavra => {
        if(this.userModel.email.toLowerCase().includes(palavra)) {
          this.mensagem = "Dados Invalidos"

          return;
        }
      });
      
      this.loginService.login (this.userModel).subscribe((response) => {
      console.log("Deu certo") 
        this.router.navigateByUrl("/")

      }, (respostaErro) => {
        // alert(erro.error)
        // console.log(erro)
        if (respostaErro.error == "Email and password are required") {
          this.mensagem = "Email e Senha Incorretos"
        } else if (respostaErro.error == "Incorrect password") {
          this.mensagem = "Senha Incorreta"
        }else {
          this.mensagem = respostaErro.error}


        })   

    }
}


// console.log(this.userModel)
