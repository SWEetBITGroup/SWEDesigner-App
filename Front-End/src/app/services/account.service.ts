import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestMethod, ResponseContentType }  from '@angular/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
  * @param router used to create a new instantiation of Router
  * @param http used to create a new instantiation of Http
  */
  constructor(private router: Router,private http: Http) {
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
    this.http.post('/insUsr', user,{
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
  * This function retrive the password by the associated user's mail
  * @param mail is the user's information that allow to retrive the pawwsord
  */
  retrivePwd(mail: String){
    let email = {
      "mail": mail
    }
    this.http.post('/forgotPwd', email,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      console.log(response);
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
        console.log(response);
        this.setUserLoggedIn();
        this.setUsername(response.username);
        this.makeCokie();
        cb(err);
      }
      else{
        console.log("errore nel login");
      }
    })
  }
  /**
   * This Function send a request of password's change to server and amange its response
   * @param username 
   * @param pass 
   * @param cb 
   */
  changePwd(username: String, pass: String, cb: Function){
    let userData = {
      "username": username,
      "new_password": pass
    }
    this.http.post('/updatePwd', userData,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
      }
    })
  }
  /**
   * This Function send a request of email's change to server and amange its response
   * @param username 
   * @param mail 
   * @param cb 
   */
  changeMail(username: String, mail: String, cb:Function){
    let userData = {
      "username": username,
      "new_mail": mail
    }
    this.http.post('/updateMail', userData,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
      }
    })
  }
  /**
   * This Function send a request of username's change to server and amange its response
   * @param username 
   * @param newUsername 
   * @param cb 
   */
  changeUsername(username: String, newUsername: String, cb: Function){
    let userData = {
      "username": username,
      "new_username": newUsername
    }
    this.http.post('/updateUsername', userData, {
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
      }
    })
  }
  deleteAccount(username: String, cb: Function){
    let dataUser = {
      "username": username
    }
    this.http.post('/deleteUsr', dataUser,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
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
  /**
  * This function redirect the current component to the 'destination' component
  * @param destination is the route destination component
  */
  redirectComponent(destination:string){
    this.router.navigate(['/' + destination ]);
  }
  setUsername(usr: String){
    //console.log(usr);
    this.username = usr;
    Cookie.set('username', this.username);
  }
  /**
   * This function make 3 cookie with the 3 user's information
   */
  makeCokie() {
    Cookie.set('email', this.email);
    Cookie.set('password', this.password);
    Cookie.set('username', this.username);
  }
  /**
   * This function set the 'AccountService' variables by the input information
   * @param {string} user used to set the username
   * @param {string} mail used to set the email
   * @param {string} pwd  used to set the password
   * @memberof AccountService
   */
  setParam(user: string, mail:string ,pwd: string) {
    this.email = mail;
    this.password = pwd;
    this.username = user;
  }
  /**
   * This funcion delete all cookie and make the user logout
   */
  logout(){
    Cookie.deleteAll();
    this.isUserLoggedIn = false;
    this.setParam('', '', '');
    this.redirectComponent('home');
  }
}
