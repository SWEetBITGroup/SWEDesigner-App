import { Component, Input, OnDestroy} from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
/**
 * This component allow to change the class name to the selected shape
 */
@Component({
  selector: 'app-change-class-name',
  templateUrl: './change-class-name.component.html',
  styleUrls: ['./change-class-name.component.css']
})
export class ChangeClassNameComponent {
  /**
   * Create an instantiation of ChangeClassNameComponent
   * @param classMenuService used to create a new instantiation of ClassMenuService
   */
  constructor(private classMenuService: ClassMenuService) {}

  /**
   * Change the name of the selected class and resets the input value into the HTML template
   * @param newName
   */
  changeClassName(newName: string) {
    if (newName != '') {
      this.classMenuService.classe.set('name',newName);
      this.classMenuService.name = newName;
      (<HTMLInputElement>document.getElementById('newName')).value = '';
    }
  }
}
