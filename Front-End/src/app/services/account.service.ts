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
   * Send, by POST, data to server and catch its response.
   * This function is used for user's registration
   * @param usr 
   * @param mail 
   * @param pwd 
   */
  register(usr: String, mail: String, pwd: String, cb: Function){
    var err = false;
    let user = {
      "username": usr,
      "email": mail,
      "pass": pwd
    }
    this.http.post('\insUsr', user,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        this.setUserLoggedIn();
        cb(err);
      }
    })
  }
  
  /**
   * Send, by POST, data to server and catch its response
   * This function is used for user's login
   * @param email 
   * @param pass 
   * @param cb 
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
