import { Component } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-list-method',
  templateUrl: './class-list-method.component.html',
  styleUrls: ['./class-list-method.component.css']
})
export class ClassListMethodComponent  {
  /**
  * Create an instantiation of ClassListMethodComponent
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService){}
  /**
  * Removes a method of the given name from the class element and from the class object of type Classe
  * @param nome this value is the method name
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
  /**
  * This method return the class's method list
  */
  getMetodi(){
    this.classMenuService.getMetodi();
  }
  /**
  * This function closes all the collapsed div except the selected one
  */
  closeCollapsedList() {
    if ( $('#listaMetodi').attr('aria-expanded') ) {
      $('#listaAttributi').removeClass('in');
    }
  }
}
