import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  
  constructor() { }
  
  ngAfterViewInit() {
    /**
    * This function allow to the icon like a cross in to the right top corner the close of the component
    */
    $('.close').click(function(){
      $('#manage-profile').removeClass("in");
      $('.tmp-disable').removeClass('disabled');
    });
  }
  
}
