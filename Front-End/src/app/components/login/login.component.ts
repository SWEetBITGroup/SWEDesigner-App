import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router:Router, private account:AccountService) { }
  
  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username == "admin" && password == "admin") {
      this.account.setUserLoggedIn();
      this.router.navigate(['/editor']);
    }
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
      }, 1000);
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
            function(){ $('.text').removeClass('hide'); } , 200 );
          }, 900); 
        }

      }    
      
  }
    