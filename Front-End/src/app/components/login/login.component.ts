import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor() { }
  
  ngAfterViewInit(){
    /**
    * !important the next function is just to add animation on the page
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
    