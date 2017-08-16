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

  updateCheckbox(event: any) {
    //attributi
    if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'staticAtt')
        this.checkFinalAtt.nativeElement.checked = false;
    if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'finalAtt')
        this.checkStaticAtt.nativeElement.checked = false;
    //attributi di lista modificata
    if (this.checkStaticAttMod.nativeElement.checked && this.checkFinalAttMod.nativeElement.checked && event == 'staticAttMod')
        this.checkFinalAttMod.nativeElement.checked = false;
    if (this.checkStaticAttMod.nativeElement.checked && this.checkFinalAttMod.nativeElement.checked && event == 'finalAttMod')
        this.checkStaticAttMod.nativeElement.checked = false;
  }
 /**
  * This function closes all the collapsed div except the selected one
  * @param event name of element reference
  */
  closeCollapsedList(event:any) {
    if (!$(event).hasClass("listaAttr")) {
      if ($('#listaAttr').attr("aria-expanded"))
          $('#listaAttr').removeClass("in");
    }
  }
  /**
   * This funcion closes all the collapsed div
   */
  closeCollapsedAllList () {
    if ($('#listaAttr').attr("aria-expanded"))
          $('#listaAttr').removeClass("in");
    if ($('#addAttr').attr("aria-expanded"))
       $('#addAttr').removeClass("in");
    if ($('.listaModAttr').attr("aria-expanded"))
       $('.listaModAttr').removeClass("in");
  }
}
