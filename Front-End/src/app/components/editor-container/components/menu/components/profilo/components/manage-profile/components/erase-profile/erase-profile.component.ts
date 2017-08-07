import { Component } from '@angular/core';

@Component({
  selector: 'app-erase-profile',
  templateUrl: './erase-profile.component.html',
  styleUrls: ['./erase-profile.component.css']
})
export class EraseProfileComponent {
  
  constructor() { }
  /**
  * This function delete the profile and all the project binf to it
  */
  deleteProfile() {
    console.log("Profilo cancellato");
  }
  
}
