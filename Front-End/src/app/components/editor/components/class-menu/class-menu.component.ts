import { Component, Input, OnDestroy } from '@angular/core';

import { ClassMenuService } from '../../services/class-menu.service';
import { MainEditorService } from '../../../../services/main-editor.service';
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
  types = ['byte','short','int','long','float','double','boolean','char'];
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
  selectedTipoMet: string;
  /**
   * Used to store the selected visibility to build a new method
   */
  selectedAccMet: string = 'public';

  // Array per parametri di metodi
  /**
   * Used to store an array of parameters to build a new method
   */
  parametriMetodo= new Array<Param>();

  /**
   * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
   * by subscription from classMenuService
   * @param classMenuService used to create a new instantiation of ClassMenuService
   * @param mainEditorService used to create a new instantiation of ClassMenuService
   */
  constructor(private classMenuService: ClassMenuService, private mainEditorService: MainEditorService) {
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
  addAttributo(nome: string) {
    let tipo = this.selectedTipoAtt;
    let acc = this.selectedAccAtt;
    console.log(nome+' '+tipo+' '+acc);
    if(nome && tipo && acc){
      try {
        this.mainEditorService.addAttributo(tipo, nome, acc);
      } catch (error) {
        if(error.message == 'NomePresente')
          // TODO: segnalare l'errore sul menu! Eliminare il console log
          console.log('nome attributo già esistente');
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
      attributi.push(vis+' '+nome+' : '+ tipo);
      this.classe.set('attributes',null); // Hack per far funzionare l'event change:attrs
      this.classe.set('attributes',attributi);
      this.selectedAccAtt = 'public';
      this.selectedTipoAtt = null;
      } else {
        // TODO: segnalare il mancato selezionamento dei campi
        console.log('tette');
    }
  }

  /**
   * Removes an attribute of the given name from the class element and from the class object of type Classe
   * @param nome name of the attribute to removes
   */
  removeAttributo(nome: string) {
    let attributi = this.classe.attributes.attributes;
    attributi.splice(attributi.findIndex(element => {
      let att = element.split(': ');        // Tutto questo perché non sono riuscito ad
      att = att[0].split(' ');              // implementare una regular expression S.B.
      if(att[1] == nome) {return element;}
    }),1);
    this.classe.set('attributes',null);
    this.classe.set('attributes',attributi);
    console.log('ora rimuovo attr');
    this.mainEditorService.removeAttributo(nome);
  }

  /**
   * Mododify the properties of an attribute
   */
  changeAttributo() {

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
  aggiungiParam() {
    this.parametriMetodo.push(new Param("test","test"));
    console.log("caodsa");
  }

  // Funzione per aggiungere un metodo alla classe selezionata
  /**
   * Retrives information from the template HTML of this component to build 
   * a new method. If one or more parameter isn't present an error will be shown
   * @param nome 
   */
  addMetodo(nome: string) {
    let tipo = this.selectedTipoMet;
    let acc = this.selectedAccMet;
    console.log(nome+' '+tipo+' '+acc);
    if(nome && tipo && acc){
      try {
        this.mainEditorService.addMetodo(tipo, nome, acc);
      } catch (error) {
        if(error.message == 'NomePresente')
          // TODO: segnalare l'errore sul menu! Eliminare il console log
          console.log('nome attributo già esistente');
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
      metodi.push(vis+' '+nome+'(): '+ tipo);
      this.classe.set('methods',null); // Hack per far funzionare l'event change:attrs
      this.classe.set('methods',metodi);
      this.selectedAccMet = 'public';
      this.selectedTipoMet = null;
      } else {
        // TODO: segnalare il mancato selezionamento dei campi
        console.log('tette');
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
      let met = element.split(': ');        // Tutto questo perché non sono riuscito ad
      met = met[0].split(' ');              // implementare una regular expression S.B.
      if(met[1] == nome) {return element;}
    }),1);
    this.classe.set('attributes',null);
    this.classe.set('attributes',metodi);
    console.log('ora rimuovo metodo');
    this.mainEditorService.removeMetodo(nome);
  }

  /**
   * Set the editor in activity mode to modify the behavior of the method of the given name
   * @param nome name of metho to modify
   */
  modifyMetodo(nome: string) {
    this.mainEditorService.enterActivityMode(nome);
  }

}
