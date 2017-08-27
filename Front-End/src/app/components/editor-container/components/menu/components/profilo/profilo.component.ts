import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../../../../../services/account.service';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
/**
 * This component allow to menage the profile
 */
@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {
  /**
  * Get a reference to the ManageProfileComponent component
  */
  @ViewChild('manageProfile') private manageProf: ManageProfileComponent;
  /**
  * Create an instantiation of ProfiloComponent
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) {}

  ngAfterViewInit(){
    // CSS Function
    // This directiove disable all the button in the top menu while the manage profile div is open
    $('#menuProfilo').click(function(){
      if (!$('#manage-profile').is(':visible')) {
        $('.tmp-disable').addClass('disabled');
      }
      else {
        $('.tmp-disable').removeClass('disabled');
      }
    });
  }
  /**
  * This funcion do the refresh of project list
  */
  callRefresh() {
    this.refreshList();
  }
  /**
  * This funcion do the refresh of project list
  */
  refreshList() {
    this.manageProf.refreshList();
  }
}
