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
   * Used to store the selected return type to build a new method.
   */
  selectedTipoMet: string = 'void';
  nomeMet: string;
  /**
   * Used to store the selected visibility to build a new method
   */
  selectedAccMet: string = 'public';
  /**
   * Used to store an array of parameters to build a new method
   */
  parametriMetodo = new Array<Param>();
   /**
   * Array of primitive data types
   */
  types = ['byte','short','int','long','float','double','boolean','char','String'];
  /**
   * Array of visibility
   */
  accessoAttr = ['public','protected','private'];

  costruttore: boolean;
   /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('staticMet') staticMetCheckbox: ElementRef;
  /**
   * Used to point to a HTML checkbox element 
   */
  @ViewChild('constructor') constructorCheckbox: ElementRef;


constructor(private classMenuService: ClassMenuService) 
  { }

/* Funzione per aggiungere/rimuovere la riga della lista di Parametri attuali */
  /**
   * Adds a new parameter into the array parametriMetodo
   */
  addParam(type: string, name: string) {
    let sameName = false;
    this.parametriMetodo.forEach(param => {
      if(param.getNome() == name)
        sameName = true;
    });
    if(!sameName) 
    {
      this.parametriMetodo.push(new Param(type,name));
      $('#tipiParam').val("");
      $('#nomeParam').val("");
    }
    else  
      alert("Non è possibile inserire due o più parametri con lo stesso nome");
  }

  // Funzione per aggiungere un metodo alla classe selezionata
  /**
   * Retrives information from the template HTML of this component to build 
   * a new method. If one or more parameter isn't present an error will be shown
   * @param nome 
   */
  addMetodo(nome: string, staticMet: boolean, constructor: boolean, tipo: string, acc: string) {
    let params = this.parametriMetodo;
    this.classMenuService.addMetodo(nome, staticMet, constructor, tipo, acc, params);
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
