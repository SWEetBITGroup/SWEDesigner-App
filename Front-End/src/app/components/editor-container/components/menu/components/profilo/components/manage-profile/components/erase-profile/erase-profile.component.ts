import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../../../../../../../../services/account.service';


@Component({
  selector: 'app-erase-profile',
  templateUrl: './erase-profile.component.html',
  styleUrls: ['./erase-profile.component.css']
})
export class EraseProfileComponent {
  
  constructor(private accountService: AccountService, private router: Router) { }
  /**
  * This function delete the profile and all the project binf to it
  */
  deleteProfile() {
    let username = this.accountService.username;
    this.accountService.deleteAccount(username, (err)=>{
      if(err){
        alert("Problema eliminazione profilo");
      }
      else{
        alert("Profilo eliminato correttamente");
        this.accountService.logout();
      }
    })
  }
  
}
