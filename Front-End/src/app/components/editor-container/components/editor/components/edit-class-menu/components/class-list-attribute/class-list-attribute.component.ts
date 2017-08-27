import { Component } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-list-attribute',
  templateUrl: './class-list-attribute.component.html',
  styleUrls: ['./class-list-attribute.component.css']
})
export class ClassListAttributeComponent{
  /**
  * Create an instantiation of ClassListAttributeComponent
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService){}
  /**
  * Removes an attribute of the given name from the class element and from the class object of type Classe
  * @param nome name of the attribute to removes
  */
  removeAttributo(nome: string) {
    this.classMenuService.removeAttributo(nome);
  }
  /**
  * Mododify the properties of an attribute
  * @param newName name of the attribute to modify
  * @param oldName old name of the attribute
  * @param tipo tipe of the attribute to modify
  * @param acc type of access of the attribute to modify
  * @param stat check if the attribute is static
  * @param final check if the attribute is final
  */
  changeAttributo(newName: string, oldName: string, tipo: string, acc: string , stat: boolean, final: boolean) {
    this.classMenuService.changeAttributo(newName, oldName, tipo, acc, stat, final);
  }
  /**
  * This function allows to be check only one element on the attribute checkbox
  * @param event name of id element
  */
  justOneCheckbox(event: any) {
    if ( event === 'staticAttEdit') {
      $('#finalAttEdit').prop('checked', false);
    }
    if ( event === 'finalAttEdit') {
      $('#staticAttEdit').prop('checked', false);
    }
  }
  /**
  * This function closes all the collapsed div except the selected one
  */
  closeCollapsedList() {
    if ( $('#listaAttributi').attr('aria-expanded') ) {
      $('#listaMetodi').removeClass('in');
    }
  }
}
