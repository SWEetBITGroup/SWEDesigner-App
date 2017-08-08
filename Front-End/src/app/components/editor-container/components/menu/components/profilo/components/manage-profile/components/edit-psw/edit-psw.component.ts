import { Component } from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';
/**
* Allow the password's upgrade
*/
@Component({
  selector: 'app-edit-psw',
  templateUrl: './edit-psw.component.html',
  styleUrls: ['./edit-psw.component.css']
})
export class EditPswComponent {
  /**
  * Used to set the new username's value
  */
  newPassword: string;
  /**
  * Create an instantiation of EditPswComponent and set 'newPassword' to null
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) {
    this.newPassword = '';
  }
  /**
  * This function change the password's value and reset the input box to null
  */
  changePsw() {
    let username = this.accountService.username;
    let newPwd = this.newPassword;
    this.accountService.changePwd(username, newPwd, function(err){
      if(err){
        alert("Problema con la modifica");
      }
      else{
        alert("Password modificata");
      }
    });
  }
}
