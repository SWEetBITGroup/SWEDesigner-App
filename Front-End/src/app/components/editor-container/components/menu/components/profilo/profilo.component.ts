import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() { 

  }

  
  ngOnInit() { }

    ngAfterViewInit(){
$('#menuProfilo').click(function(){
  if (!$('#menuProfiloToggle').is(':visible'))
    $('.tmp-disable').addClass('disabled');
  else
    $('.tmp-disable').removeClass('disabled');
});

       }


}
