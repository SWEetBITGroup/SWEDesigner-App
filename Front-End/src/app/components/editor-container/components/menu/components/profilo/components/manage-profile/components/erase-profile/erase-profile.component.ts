import { Component } from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';

@Component({
  selector: 'app-erase-profile',
  templateUrl: './erase-profile.component.html',
  styleUrls: ['./erase-profile.component.css']
})
export class EraseProfileComponent {
  
  constructor(private accountService: AccountService) { }
  /**
  * This function delete the profile and all the project binf to it
  */
  deleteProfile() {
    let username = this.accountService.username;
    this.accountService.deleteAccount(username, function(err){
      if(err){
        alert("Problema eliminazione profilo");
      }
      else{
        alert("Profilo eliminato correttament");
      }
    })
  }
  
}
