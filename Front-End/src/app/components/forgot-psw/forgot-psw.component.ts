import { Component, AfterViewInit } from '@angular/core';

// Services
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.css']
})
/**
* 'ForgotPswComponent' allow to the user to authenticate to the editor by the passowrd's reset
* @param accountService used to create a new instantiation of AccountService
*/
export class ForgotPswComponent {
  
  /**
  * Create an instantiation of ForgotPswComponent
  */
  constructor(private accountService: AccountService) { }
  // restituisce true se non ci son errori
  tryGetNewPassword(e) {
    this.accountService.email = e.target.elements[0].value;
    return true;
  }

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
