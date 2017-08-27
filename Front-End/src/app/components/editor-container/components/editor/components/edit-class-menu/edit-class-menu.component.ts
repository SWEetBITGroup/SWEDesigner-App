import { Component, OnInit } from '@angular/core';
import { ClassMenuService } from '../../services/class-menu.service';
/**
* This component allow to edit a class; is splitted in other component to reduce the overhead.
*/
@Component({
  selector: 'app-edit-class-menu',
  templateUrl: './edit-class-menu.component.html',
  styleUrls: ['./edit-class-menu.component.css']
})
export class EditClassMenuComponent implements OnInit {
  /**
  * Create an instance of EditClassMenuComponent
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService) { }

  ngOnInit() {
  }

}
