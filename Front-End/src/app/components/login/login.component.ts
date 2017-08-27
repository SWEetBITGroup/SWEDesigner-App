import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
* 'LoginComponent' allow the authentication to the user
*/
export class LoginComponent {
  /**
  * This variable save the user cookie
  */
  cookieUser: string ;
  /**
  * Create an instantiation of LoginComponent
  * @param router used to create a new instantiation of Router
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private router: Router, private accountService: AccountService) {
    /*Cookie.set('email', 'prova@Mail');
    Cookie.set('password', 'provapsw');
    Cookie.set('username', 'gianfrancioschio');
    this.accountService.email = Cookie.get('email');
    this.accountService.password = Cookie.get('password');
    this.accountService.username = Cookie.get('username');*/
  }
  ngOnInit() {
    this.cookieUser = Cookie.get('username');
    if ( this.cookieUser ){
      this.accountService.setParam(Cookie.get('username'),Cookie.get('email'),Cookie.get('password'));
      this.accountService.setUserLoggedIn();
      this.router.navigate(['/editor']);
    }
  }
  /**
  * This function make a login test
  */
  loginUserProva() {
    this.accountService.setUserLoggedIn();
    this.router.navigate(['/editor']);
  }
  /**
  * This function allow to the login
  * @param e This value take all the input values
  */
  loginUser(e) {
    e.preventDefault();
    this.accountService.email = e.target.elements[0].value;
    this.accountService.password = e.target.elements[1].value;
    this.accountService.checkLogin(this.accountService.email, this.accountService.password, (err)=>{
      if(!err){
        if(this.accountService.getUserLoggedIn()){
          this.router.navigate(['/editor']);
        }
      }
      else{
        alert("Problema con le credenziali!!")
      }
    });
  }

  ngAfterViewInit(){
    /**
    * !IMPORANT the next function is just to add animation on the page
    */
    /**
    * This function just make a refresh of the page.
    */
    function refresh() {
      location.reload();
    }
    /**
    * This function make a call of showElement after
    */
    $(function() {
      setTimeout(function(){
        showElement();
      }, 600);
    });
    /**
    * This function make some animation on the image logo, text logo and the form
    */
    function showElement() {
      $('img').addClass('rotate360');
      $('.box').toggleClass('active');
      setInterval(
        function(){
          $('img').addClass('logo');
          setInterval(
            function(){ $('.text').removeClass('hide'); } , 400 );
          }, 900);
        }
      }

    }
