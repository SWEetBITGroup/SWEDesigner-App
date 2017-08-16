import { Component, Input, OnDestroy} from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-display-class-name',
  templateUrl: './display-class-name.component.html',
  styleUrls: ['./display-class-name.component.css']
})
export class DisplayClassNameComponent {
  /**
   * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
   * by subscription from classMenuService
   * @param classMenuService used to create a new instantiation of ClassMenuService
   * @param mainEditorService used to create a new instantiation of ClassMenuService
   */
  constructor(private classMenuService: ClassMenuService) {
  }

  removeClass(name: string) {
    this.classMenuService.removeClass(name, this.classMenuService.classe);
  }

}
