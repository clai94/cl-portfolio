import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Injectable } from '@angular/core';

const poolData = {
  UserPoolId : 'ca-central-1_7aUSPTHb2', // your user pool id here
  ClientId : '5idliso4idb1kv5f93clnj3qsl' // your app client id here
};
const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  cognitoUser: any;

  constructor(private router: Router) { }

  register(email: string, password: string, givenName: string, familyName: string) {
    const attributeList = [];
    const dataEmail = {
      Name: 'email',
      Value: email,
    };
    const dataFirstName = {
      Name: 'given_name',
      Value: givenName,
    };
    const dataLastName = {
      Name: 'family_name',
      Value: familyName,
    };
    attributeList.push(dataEmail);
    attributeList.push(dataFirstName);
    attributeList.push(dataLastName);

    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log('signup error', err);
        return err.message;
      }
      this.cognitoUser = result.user;
      console.log('user name is ' + this.cognitoUser.getUsername());
      alert('Registration Successful!');
      return this.cognitoUser.getUsername();
    });
  }

  signIn(email: string, password: string) {
    const authData = {
      Username: email,
      Password: password,
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function(result) {
        const accessToken = result.getAccessToken().getJwtToken();
        const refreshToken = result.getRefreshToken().getToken();
        console.log(accessToken);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return(accessToken);
      },
      onFailure: function(err) {
        alert(err.message || JSON.stringify(err));
        return(err.message);
      }
    });
    if (localStorage.getItem('accessToken') !== undefined) {
      this.router.navigate(['/todolist-home']);
    }
  }

}
