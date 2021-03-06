import { Component} from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';
/**
* Allow the email's upgrade
*/
@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent {
  /**
  * Used to set the new username's value
  */
  newEmail: string;
  /**
  * Create an instantiation of EditEmailComponent and set 'newEmail' to null
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) { 
    this.newEmail = '';
  }
  /**
  * This function change the username's value and reset the input box to null
  */
  changeEmail() {
    let mail = this.newEmail;
    let username = this.accountService.username;
    this.accountService.changeMail(username, mail, function(err){
      if(err){
        alert("Problema modifica e-mail");
      }
      else{
        alert("E-mail modificata con successo");
      }
    })
  }
  
}
