import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  
  ngAfterViewInit(){
    $(function() {
      setTimeout(function(){
        showElement();
      }, 1000);
      
      function showElement() {
        $('.logo').addClass('rotate360');
        $('.box').toggleClass('active');
        // setInterval(        
        //   function(){ 
        //     $('.logo').css('margin-left', '0');  },
        //   50)
                setInterval(        
          function(){ 
 
            $('.text').removeClass('hide'); },
          200)  
          
        }
      });
    }
    
    ngOnInit() {
    }
    
  }
  