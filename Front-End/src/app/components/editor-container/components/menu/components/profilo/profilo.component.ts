import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../../../../../../services/account.service';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {
  @ViewChild('manageProfile') private manageProf: ManageProfileComponent;
  constructor(private accountService: AccountService) {}

  ngAfterViewInit(){
    // CSS Function
    /**
    * This directiove disable all the button in the top menu while the manage profile div is open
    */
    $('#menuProfilo').click(function(){
      if (!$('#manage-profile').is(':visible')) {
        $('.tmp-disable').addClass('disabled');
      }
      else {
        $('.tmp-disable').removeClass('disabled');
      }
    });
  }

  callRefresh() {
    this.refreshList();
  }
  refreshList() {
    this.manageProf.refreshList();
  }
}
