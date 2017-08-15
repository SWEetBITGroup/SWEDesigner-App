import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';


@Component({
  selector: 'app-class-list-method',
  templateUrl: './class-list-method.component.html',
  styleUrls: ['./class-list-method.component.css']
})
export class ClassListMethodComponent  {

    /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('staticMet') staticMetCheckbox: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('constructor') constructorCheckbox: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('checkStaticAtt') checkStaticAtt: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('checkFinalAtt') checkFinalAtt: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('checkStaticAttMod') checkStaticAttMod: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('checkFinalAttMod') checkFinalAttMod: ElementRef;

  costruttore: boolean;


  constructor(private classMenuService: ClassMenuService){}

//Rimuove il metodo
  /**
   * Removes a method of the given name from the class element and from the class object of type Classe
   * @param nome 
   */
  removeMetodo(nome: string) {
    this.classMenuService.removeMetodo(nome);
  }

  /**
   * Set the editor in activity mode to modify the behavior of the method of the given name
   * @param nome name of method to modify
   */
  modifyMetodo(nome: string) {
    this.classMenuService.modifyMetodo(nome);
  }
  
  getMetodi(){
    this.classMenuService.getMetodi();
  }
   /**
   * This function allows to be check only one element
   * @param event name of id element
   */
updateCheckbox(event: any) {
    if (this.staticMetCheckbox.nativeElement.checked && this.constructorCheckbox.nativeElement.checked && event == 'constructor')
        this.staticMetCheckbox.nativeElement.checked = false;
    if (this.staticMetCheckbox.nativeElement.checked && this.constructorCheckbox.nativeElement.checked && event == 'static')
      {
        this.constructorCheckbox.nativeElement.checked = false;
        this.costruttore = false;
      } 
  }
 /**
  * This function closes all the collapsed div except the selected one
  * @param event name of element reference
  */
  closeCollapsedList(event:any) {
    if ($('#listaMet').attr("aria-expanded"))
       $('#listaMet').removeClass("in");
  }
  /**
   * This funcion closes all the collapsed div
   */
  closeCollapsedAllList () {
    if ($('#listaMet').attr("aria-expanded"))
       $('#listaMet').removeClass("in");
    if ($('#addAttr').attr("aria-expanded"))
       $('#addAttr').removeClass("in");     
    if ($('.listaModAttr').attr("aria-expanded"))
       $('.listaModAttr').removeClass("in");         
  }
}
