import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestMethod, ResponseContentType }  from '@angular/http';
import { Http, Response }           from '@angular/http';

@Injectable()
/**
* 'AccountService' stores information about the account's information.
* 'AccountService' provides methods to interact with the whole application, and allow to change the account information.
*/
export class AccountService {
  /**
  * 'isUserLoggedIn' is a boolen that check if the user is logged
  */
  private isUserLoggedIn: boolean;
  /**
  * 'username' is an account's information
  */
  username;
  /**
  * 'password' is an account's information
  */
  password;
  /**
  * 'email' is an account's information
  */
  email;
  /**
  * Create an instantiation of AuthenticationGuard
  * @param isUserLoggedIn to default that variable is set to false
  */
  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }
  
  /**
  * Check if data sent to server is correct and, so, the user is correctly logged
  */
  checkLogin(email: String, pass: String, cb: Function){
    var err = false;
    let usr = {
      "mail" : email,
      "pass" : pass
    }
    this.http.post('/login', usr,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Json
    })
    .subscribe((data)=>{
      let response = data.json();
      console.log(response);
      if(response.logged == true){
        console.log("entrato if");
        this.setUserLoggedIn();
        cb(err);
      }
      else{
        console.log("errore nel login");
      }
    })
  }
  /**
  * Change the authenticatio status of the user
  */
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  /**
  * A getter method that return if the user is logged
  */
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
