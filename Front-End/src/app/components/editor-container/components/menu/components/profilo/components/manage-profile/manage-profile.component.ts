import { Component, AfterViewInit, ViewChild } from '@angular/core';

// Services
import { AccountService } from '../../../../../../../../services/account.service';
import { ProjListComponent } from './components/proj-list/proj-list.component';
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  @ViewChild('projLista') proj: ProjListComponent;

  constructor(private accountService: AccountService) { }
  ngAfterViewInit() {
    /**
    * This function allow to the icon like a cross in to the right top corner the close of the component
    */
    $('.close').click(function(){
      $('#manage-profile').removeClass("in");
      $('.tmp-disable').removeClass('disabled');
    });

  }
  refreshList() {
    this.proj.initProj();
  }

}
