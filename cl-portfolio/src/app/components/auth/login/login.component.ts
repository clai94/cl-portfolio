import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private auth: AuthenticationService) {
   }

  ngOnInit() {
  }

  signIn() {
    if (this.email === '' || this.password === '') {
      return;
    }
    const response = this.auth.signIn(this.email, this.password);
    alert(response);
  }
}
