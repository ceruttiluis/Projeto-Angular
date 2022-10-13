import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }
  userModel = new User();

  receberDados() {this.loginService.login (this.userModel).subscribe((Response) => {
    console.log(Response)
  })
  }
}
