import { Component, AfterViewInit, ViewChild } from '@angular/core';

// Services
import { AccountService } from '../../../../../../../../services/account.service';
import { ProjListComponent } from './components/proj-list/proj-list.component';
/**
 * This component is the container of the menage profile features
 */
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  /**
  * Get a reference to the ProjListComponent component
  */
  @ViewChild('projLista') proj: ProjListComponent;
  /**
  * Create an instantiation of ManageProfileComponent
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor(private accountService: AccountService) { }
  ngAfterViewInit() {
    //This function allow to the icon like a cross in to the right top corner the close of the component
    $('.close').click(function(){
      $('#manage-profile').removeClass("in");
      $('.tmp-disable').removeClass('disabled');
    });
  }
  /**
  * This funcion do the refresh of project list
  */
  refreshList() {
    this.proj.initProj();
  }
}
