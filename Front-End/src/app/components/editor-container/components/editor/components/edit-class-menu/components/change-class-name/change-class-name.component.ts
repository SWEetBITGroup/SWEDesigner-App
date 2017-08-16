import { Component, Input, OnDestroy} from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../../../../models/classe';

@Component({
  selector: 'app-change-class-name',
  templateUrl: './change-class-name.component.html',
  styleUrls: ['./change-class-name.component.css']
})
export class ChangeClassNameComponent{

  /**
   * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
   * by subscription from classMenuService
   * @param classMenuService used to create a new instantiation of ClassMenuService
   */
  constructor(private classMenuService: ClassMenuService) {}

  /**
   * Change the name of the selected class and resets the input value into the HTML template
   * @param name
   */
  changeClassName(name: string) {
    if (name != '') {
      this.classMenuService.classe.set('name',name);
      this.classMenuService.name = name;
    }
  }
}
