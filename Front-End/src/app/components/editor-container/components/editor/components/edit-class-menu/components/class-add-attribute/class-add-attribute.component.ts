import { Component } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-add-attribute',
  templateUrl: './class-add-attribute.component.html',
  styleUrls: ['./class-add-attribute.component.css']
})
export class ClassAddAttributeComponent{
  /**
  * Create an instantiation of ClassAddAttributeComponent
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService){}

  /**
  * Retrives information from the template HTML of this component to build
  * a new attribute. If one or more parameter isn't present an error will be shown
  * @param nome the name of the new attribute
  */
  addAttributo(nome: string, staticAtt: boolean, finalAtt: boolean, tipo: string, acc: string) {
    this.classMenuService.addAttributo(nome, staticAtt, finalAtt, tipo, acc);
  }
  /**
  * This function allows to be check only one element on the attribute checkbox
  * @param event name of id element
  */
  justOneCheckbox(event) {
    if ( event === 'staticAtt') {
      $('#finalAtt').prop('checked', false);
    }
    if ( event === 'finalAtt') {
      $('#staticAtt').prop('checked', false);
    }
  }
}


