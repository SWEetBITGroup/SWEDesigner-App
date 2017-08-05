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
    $('#menuProfilo').click(function(){
      if (!$('#menuProfiloToggle').is(':visible'))
        $('.tmp-disable').addClass('disabled');
      else
        $('.tmp-disable').removeClass('disabled');
    });
    
  }
  
  
}
