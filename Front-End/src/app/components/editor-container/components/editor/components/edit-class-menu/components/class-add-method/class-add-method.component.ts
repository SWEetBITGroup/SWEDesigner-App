import { Component, Input, ViewChild, ElementRef  } from '@angular/core';
import { ClassMenuService } from '../../../../services/class-menu.service';
import { Param } from '../../../../models/param';

@Component({
  selector: 'app-class-add-method',
  templateUrl: './class-add-method.component.html',
  styleUrls: ['./class-add-method.component.css']
})
export class ClassAddMethodComponent {
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('staticMet') staticMetCheckbox: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('constructor') constructorCheckbox: ElementRef;


  constructor(private classMenuService: ClassMenuService){ }
  /**
  * Adds a new parameter into the array parametriMetodo
  * @param type is the type of the one variable inside a method
  * @param name is the name of the one variable inside a method
  */
  addParam(type: string, name: string) {
    if (type && name) {
      let sameName = false;
      this.classMenuService.parametriMetodo.forEach(param => {
        if (param.getNome() == name) {
          sameName = true;
        }
      });
      if (!sameName) {
        this.classMenuService.parametriMetodo.push( new Param (type, name) );
        $('#tipiParam').val('void');
        $('#nomeParam').val('');
      } else {
        alert('Non è possibile inserire due o più parametri con lo stesso nome');
      }
    } else {
      alert('Entrambi i campi devono esser compilati');
    }
  }
  /**
  * Remove a parameter into the array parametriMetodo
  * @param name is the name of the one variable inside a method
  */
  removeParam(type: string, name: string) {
    this.classMenuService.parametriMetodo.splice(this.classMenuService.parametriMetodo.indexOf(new Param(type,name)), 1);
   }
    /**
    * Retrives information from the template HTML of this component to build
    * a new method. If one or more parameter isn't present an error will be shown
    * @param nome
    */
    addMetodo(nome: string, staticMet: boolean, constructor: boolean, tipo: string, acc: string) {
      let params = this.classMenuService.parametriMetodo;
      this.classMenuService.addMetodo(nome, staticMet, constructor, tipo, acc, params);
    }
    /**
    * This function allows to be check only one element on the attribute checkbox
    * @param event name of id element
    */
    justOneCheckbox(event) {
      if ( event === 'staticMet') {
        this.constructorCheckbox.nativeElement.checked = false;
        this.classMenuService.costruttore = false;
      }
      if ( event === 'constructor') {
        this.staticMetCheckbox.nativeElement.checked = false;
        this.classMenuService.costruttore = true;
      }
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
      else
        if ($('#listaMet').attr("aria-expanded"))
          $('#listaMet').removeClass("in");
    }
    /**
    * This funcion closes all the collapsed div
    */
    closeCollapsedAllList () {
      if ($('#listaMet').attr("aria-expanded"))
        $('#listaMet').removeClass("in");
      if ($('#addMetodo').attr("aria-expanded"))
        $('#addMetodo').removeClass("in");
    }
  }
