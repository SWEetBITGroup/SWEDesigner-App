import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-list-attribute',
  templateUrl: './class-list-attribute.component.html',
  styleUrls: ['./class-list-attribute.component.css']
})
export class ClassListAttributeComponent{

  constructor(private classMenuService: ClassMenuService){}
  @ViewChild('staticAtt') checkStaticAtt: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('finalAtt') checkFinalAtt: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('checkStaticAttMod') checkStaticAttMod: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('checkFinalAttMod') checkFinalAttMod: ElementRef;

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
  * This funcion closes all the collapsed div
  */
  closeAllCollapsedList () {
    if ($('#listaAttr').attr("aria-expanded"))
      $('#listaAttr').removeClass("in");
    if ($('#addAttr').attr("aria-expanded"))
      $('#addAttr').removeClass("in");
    if ($('.listaModAttr').attr("aria-expanded"))
      $('.listaModAttr').removeClass("in");
  }
}
