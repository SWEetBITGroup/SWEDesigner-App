import { Component, AfterViewInit } from '@angular/core';

// Services
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
/**
* 'RegistrationComponent' allow to create a new user
*/
export class RegistrationComponent {
  /**
  * Create an instantiation of RegistrationComponent
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) { }
  
  tryRegistration(e) {
    this.accountService.username = e.target.elements[0].value;
    this.accountService.email = e.target.elements[1].value;
    this.accountService.password = e.target.elements[2].value;
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
