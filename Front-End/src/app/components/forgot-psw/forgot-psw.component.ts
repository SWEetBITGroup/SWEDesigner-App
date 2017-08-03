import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.css']
})
export class ForgotPswComponent {

  constructor() { }

    ngAfterViewInit(){
    /**
    * !IMPORANT the next function is just to add animation on the page
    */
    /**
    * This call make the animation that allow to the content to apper from left to right and stop in the middle of the page
    */    
    $("#mainDiv").css({left: $('#mainDiv').offset().left}).animate({"left":"50%"}, "slow");
    /**
    * This function make the animation that allow to the content of page to diasappear from right to left
    */
       
  } 

}
