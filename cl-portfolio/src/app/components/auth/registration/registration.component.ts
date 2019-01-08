import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  signUp() {
    if (this.email === undefined || this.password === undefined) {
      return;
    }
    alert(this.authService.register(this.email, this.password, this.firstName, this.lastName));
  }

}
