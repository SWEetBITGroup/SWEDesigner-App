import { Component, AfterViewInit } from '@angular/core';
import { AccountService } from '../../../../../../services/account.service';
@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {

  constructor(private accountService: AccountService) {}

  ngAfterViewInit(){
    // CSS Function
    /**
    * This directiove disable all the button in the top menu while the manage profile div is open
    */
    $(window).resize(function(){
      let y:number = -$('#qwerty').position().left + 1;
      $('#manage-profile').css({ left: ( y ) });
      $('#manage-profile').width($('.barra-menu').width() - 1);
    });

    $('#menuProfilo').click(function(){
      if (!$('#manage-profile').is(':visible')) {
        $('.tmp-disable').addClass('disabled');
        $('#manage-profile').width($('.barra-menu').width() - 1);
        let y:number = -$('#qwerty').position().left + 1;
        $('#manage-profile').css({ left: ( y  ) });
      }
      else {
        $('.tmp-disable').removeClass('disabled');
      }
    });
  }
}
