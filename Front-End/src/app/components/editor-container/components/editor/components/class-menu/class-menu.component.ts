import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ClassMenuService } from '../../services/class-menu.service';
import { MainEditorService } from '../../../../../../services/main-editor.service';
import { ActivityService } from '../../services/activity.service'
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../../models/classe';
import { Param } from '../../models/param';

@Component({
  selector: 'class-menu',
  templateUrl: './class-menu.component.html',
  styleUrls: ['./class-menu.component.css']
})
/**
 * Interacts with the HTML template and provides methods to interact with the classes present
 * into the class diagram of the EditorComponent.
 */
export class ClassMenuComponent implements OnDestroy{
  /**
   * The current selected class in the class diagram of the EditorComponent
   */
  classe: any;
  /**
   * The name of the current selected class in the class diagram of the EditorComponent
   */
  name: string = '';
  /**
   * A boolean flag which is put at true if the name of a new added attribut has the same name 
   * of an attribute presents in the selected class
   */
  nomeAttributoUguale: boolean;

  /**
   * Subscription to the osservable object which is the selected class in the editor
   */
  sub: Subscription; // Subscription all'ossevable di tipo elemento-classe selezionato dal grafico

  /**
   * Array of primitive data types
   */
  types = ['byte','short','int','long','float','double','boolean','char','String'];
  /**
   * Array of visibility
   */
  accessoAttr = ['public','protected','private'];

  /**
   * Used to store the selected type for the constructor of a new attribute.
   */
  selectedTipoAtt: string;
  /**
   * Used to store the selected visibility to build a new attribute
   */
  selectedAccAtt: string = 'public';
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

  costruttore: boolean;
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

  /**
   * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
   * by subscription from classMenuService
   * @param classMenuService used to create a new instantiation of ClassMenuService
   * @param mainEditorService used to create a new instantiation of ClassMenuService
   */
  constructor(private classMenuService: ClassMenuService, 
              private mainEditorService: MainEditorService,
              private activityService: ActivityService) {
    this.sub = classMenuService.selectedClass$.subscribe(
      (x) => {
        this.classe = x;
        this.name = x.getClassName();
      }
    );
    this.nomeAttributoUguale = false;
  }

  // Funzione per aggiungere un attributo alla classe selezionata
  /**
   * Retrives information from the template HTML of this component to build 
   * a new attribute. If one or more parameter isn't present an error will be shown 
   * @param nome the neme of the new attribute
   */
  addAttributo(nome: string, staticAtt: boolean, finalAtt: boolean, tipo: string, acc: string) {
    console.log(nome+' '+tipo+' '+acc);
    if(nome && tipo && acc){
      try {
        this.mainEditorService.addAttributo(tipo, nome, acc, staticAtt);
      } catch (error) {
        if(error.message == 'NomePresente')
          // TODO: segnalare l'errore sul menu! Eliminare il console log
          console.log('Non è possibile inserire due attributi con lo stesso nome');
      }
      let attributi = this.classe.attributes.attributes;
      let vis;
      switch (acc) {  // switch per assegnare il giusto simbolo alla visibilità di un attributo
        case 'public':
          vis = '+';
          break;
        case 'protected':
          vis = '#';
          break;
        case 'private':
          vis = '-';
      }
      let stat = '';
      let final = '';
      if(staticAtt)
        {
          stat = 'static';
          attributi.push(vis+' '+stat+' '+nome+' : '+ tipo);
        }
       else if(finalAtt)
        {
          final = 'final';
          attributi.push(vis+' '+final+' '+nome+' : '+ tipo);  
        }
      else
        attributi.push(vis+' '+nome+' : '+ tipo);

      this.classe.set('attributes',null); // Hack per far funzionare l'event change:attrs
      this.classe.set('attributes',attributi);
      this.selectedAccAtt = 'public';
      this.selectedTipoAtt = null;
      $('#nome-attributo').val("");
      } else {
        alert('Alcuni capi del form per la creazione del nuovo attributo non sono stati compilati');
    }
  }

  /**
   * Removes an attribute of the given name from the class element and from the class object of type Classe
   * @param nome name of the attribute to removes
   */
  removeAttributo(nome: string) {
    let attributi = this.classe.attributes.attributes;
    attributi.splice(attributi.findIndex(element => {
      let att = element.split(' ');
      for(let i=0; i<att.length; i++)
        if(att[i] == nome) 
          return element;
    }),1);
    this.classe.set('attributes',null);
    this.classe.set('attributes',attributi);
    console.log('ora rimuovo attr');
    this.mainEditorService.removeAttributo(nome);
  }

  /**
   * Mododify the properties of an attribute
   */
  changeAttributo(name: string, oldName: string, tipo: string, acc: string , stat: boolean, final: boolean) {
    // if(name && tipo && acc) {
    //   this.mainEditorService.changeAttributo(oldName,name,tipo,acc);
    // }
    this.removeAttributo(oldName);
    this.addAttributo(name,stat,final,tipo,acc);
  }

  /**
   * Change the name of the selected class and resets the input value into the HTML template
   * @param name 
   */
  changeNome(name: string) {
    if (name != '') {
      this.classe.set('name',name);
      this.name = name;
      (<HTMLInputElement>document.getElementById('changeName')).value = '';
    }
  }

  /**
   * Used to unsubscribe from the observable to prevent memory leak
   */
  ngOnDestroy() {
    // Previene memory leak quando il componente è distrutto
    this.sub.unsubscribe();
  }

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
    console.log(nome+' '+tipo+' '+acc);
    if((nome && tipo && acc) || (constructor && acc) ){
      try {
        if(constructor == true){
          nome = this.name;
          tipo = this.name;
        }          
        this.mainEditorService.addMetodo(staticMet,constructor,tipo, nome, acc, params);
      } catch (error) {
        if(error.message == 'NomePresente')
          alert('Non è possibile inserire due o più metodi con lo stesso nome');
      }
      let metodi = this.classe.attributes.methods;
      let vis;
      switch (acc) {  // switch per assegnare il giusto simbolo alla visibilità di un attributo
        case 'public':
          vis = '+';
          break;
        case 'protected':
          vis = '#';
          break;
        case 'private':
          vis = '-';
      }
      let parametri: string = '';
      for (let ind = 0; ind < params.length; ind++) {
        parametri += params[ind].getNome() + ' : ' + params[ind].getTipo();
        if(ind!=params.length-1)
          parametri += ', ';
      }
      let st = '';
      if(staticMet) {
        st = 'static';
      }
      metodi.push(vis+' '+st+' '+nome+' ( '+ parametri +' ) : '+ tipo);
      this.classe.set('methods',null); // Hack per far funzionare l'event change:attrs
      this.classe.set('methods',metodi);
      this.selectedAccMet = 'public';
      this.selectedTipoMet = 'void';
      $('#nome-metodo').val("");
      this.staticMetCheckbox.nativeElement.checked = false;
      this.constructorCheckbox.nativeElement.checked = false;
      $('#tipiParam').val("");
      $('#nomeParam').val("");
      this.parametriMetodo = new Array<Param>(); // Cleans the array of params
      } else {
        alert('Alcuni capi del form per la creazione del nuovo metodo non sono stati compilati');
    }
  }

  //Rimuove il metodo
  /**
   * Removes a method of the given name from the class element and from the class object of type Classe
   * @param nome 
   */
  removeMetodo(nome: string) {
    let metodi = this.classe.attributes.methods;
    metodi.splice(metodi.findIndex(element => {
      let met = element.split(' ');        
      for(let i=0; i<met.length; i++){
        if(met[i] == nome) 
          return element;
      }
    }),1);
    this.classe.set('attributes',null);
    this.classe.set('attributes',metodi);
    this.mainEditorService.removeMetodo(nome);
  }

  /**
   * Set the editor in activity mode to modify the behavior of the method of the given name
   * @param nome name of method to modify
   */
  modifyMetodo(nome: string) {
    this.mainEditorService.enterActivityMode(nome);
    this.activityService.setSelectedMethod(this.mainEditorService.getSelectedClasse().retriveMethod(nome));
  }

  getMetodi() {
    return this.mainEditorService.getSelectedClasse().getMetodi();
  }

  removeClass(name: string) {
    this.mainEditorService.removeClass(name, this.classe);
  }

  isAddableMethod() {
    if(!this.costruttore && !this.nomeMet)
      return true;
  }

  addMain() {
    this.addParam('String[]', 'args');
    this.addMetodo('main', true, false, 'void', 'public');
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
    else 
    if ($('#listaMet').attr("aria-expanded"))
       $('#listaMet').removeClass("in");
  }
  /**
   * This funcion closes all the collapsed div
   */
  closeCollapsedAllList () {
    if ($('#listaAttr').attr("aria-expanded"))
          $('#listaAttr').removeClass("in");
    if ($('#listaMet').attr("aria-expanded"))
       $('#listaMet').removeClass("in");
    if ($('#addAttr').attr("aria-expanded"))
       $('#addAttr').removeClass("in");     
    if ($('.listaModAttr').attr("aria-expanded"))
       $('.listaModAttr').removeClass("in"); 
    if ($('#addMetodo').attr("aria-expanded"))
       $('#addMetodo').removeClass("in");           
  }
}