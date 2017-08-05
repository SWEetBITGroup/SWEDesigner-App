import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  /**
  * Create an instantiation of LoginComponent
  * @param accountService used to create a new instantiation of AccountService
  */
  constructor( private accountService: AccountService) { }
  
  ngOnInit() {
  }
  
}
