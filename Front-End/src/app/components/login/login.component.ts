import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

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
  * Create an instantiation of LoginComponent
  * @param router used to create a new instantiation of Router
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private router: Router, private accountService: AccountService) { }
  
  
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
    