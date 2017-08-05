import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {
  
  constructor() {}
  
  ngAfterViewInit(){
    /**
    * This directiove disable all the button in the top menu while the manage profile div is open
    */
    $(window).resize(function(){
      let y:number = -$("#qwerty").position().left;
      $('#manage-profile').css({left: y});
      $('#manage-profile').width($(window).width());
    });
    $('#menuProfilo').click(function(){
      if (!$('#manage-profile').is(':visible')) {
        $('.tmp-disable').addClass('disabled');
        $('#manage-profile').width($(window).width());
        let y:number = -$("#qwerty").position().left;
        $('#manage-profile').css({left: y});
      }
      else
        $('.tmp-disable').removeClass('disabled');
    });
    
  }
  
  
}
