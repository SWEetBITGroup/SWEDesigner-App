import { Component } from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';
/**
* Allow the username's upgrade
*/
@Component({
  selector: 'app-edit-username',
  templateUrl: './edit-username.component.html',
  styleUrls: ['./edit-username.component.css']
})
export class EditUsernameComponent {
  /**
  * Used to set the new username's value
  */
  newUsername: string;
  /**
  * Create an instantiation of EditUsernameComponent and set 'newUsername' to null
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) {
    this.newUsername = '';
  }
  /**
   * This function change the username's value and reset the input box to null
   */
  changeUsername() {
    let oldUsername = this.accountService.username;
    let newUsername = this.newUsername;
    this.accountService.changeUsername(oldUsername, newUsername, (err)=>{
      if(err){
        alert("Problema con la modifica dell'username");
      }
      else{
        alert("Username aggiornato con successo");
        this.accountService.setUsername(newUsername);
      }
    })
  }
}
