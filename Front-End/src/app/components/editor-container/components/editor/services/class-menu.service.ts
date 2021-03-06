import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MainEditorService } from '../../../../../services/main-editor.service';
import { ActivityService } from '../services/activity.service'
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../models/classe';
import { Param } from '../models/param';

@Injectable()
export class ClassMenuService {
  /**
  * Observable object-class source
  */
  private selectedClassSource = new Subject<any>();
  /**
  * Observable object-class stream
  */
  selectedClass = this.selectedClassSource.asObservable();
  /**
  * The current selected class in the class diagram of the EditorComponent
  */
  classe: any;
  /**
  * The name of the current selected class in the class diagram of the EditorComponent
  */
  name: string = '';
  /**
  * Subscription to the osservable object which is the selected class in the editor
  */
  sub: Subscription; // Subscription all'ossevable di tipo elemento-classe selezionato dal grafico
  /**
  * Array of primitive data types
  */
  types = ['short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String', 'int[]', 'long[]','short[]','long[]','double[]','char[]','String[]'];
  /**
  * Array of primitive data types
  */
  methodTypes = ['void','short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String', 'int[]', 'long[]','short[]','long[]','double[]','char[]','String[]'];
  /**
  * Array of visibility
  */
  accessoAttr = ['public', 'protected', 'private'];
  /**
  * Used to store the selected type for the constructor of a new attribute.
  */
  selectedTipoAtt: string;
  /**
  * Used to store the selected tyoe to edit the attribute.
  */
  selectedTipoAttEdit: string;
  /**
  * Used to store the selected visibility to build a new attribute
  */
  selectedAccAtt: String = 'public';
  /**
  * Used to store the selected visibility to edit the attribute
  */
  selectedAccAttEdit: String = 'public';
  /**
  * Used to store the selected return type to build a new method.
  */
  selectedTipoMet: String = 'void';
  /**
  * Used to store the new method's name
  */
  nomeMet: String;
  /**
  * Used to store the selected visibility to build a new method
  */
  selectedAccMet: String = 'public';
  /**
  * Used to store an array of parameters to build a new method
  */
  parametriMetodo = new Array<Param>();
  /**
  * Used to store if the method is a constructor
  */
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
  * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
  * by subscription from classMenuService
  * @param classMenuService used to create a new instantiation of ClassMenuService
  * @param mainEditorService used to create a new instantiation of ClassMenuService
  */
  constructor(private mainEditorService: MainEditorService,
    private activityService: ActivityService) {
    this.sub = this.selectedClass.subscribe((x) => {
      this.classe = x;
      this.name = x.getClassName();
    }
    );
  }
  /**
  * Service message commands
  * @param classe this variable is use to set the selected class
  */
  classSelection(classe: any) {
    this.selectedClassSource.next(classe);
    this.classe = classe;
  }
  /**
  * Change the name of the selected class and resets the input value into the HTML template
  * @param name
  */
  changeClassName(name: string) {
    this.types.forEach(element => {
      if(element==this.mainEditorService.getSelectedClasse().getNome()){
        this.types.splice(this.types.indexOf(element), 1);
        this.types.push(name);
      }        
    });
    this.methodTypes.forEach(element => {
      if(element==this.mainEditorService.getSelectedClasse().getNome()){
        this.methodTypes.splice(this.types.indexOf(element), 1);
        this.methodTypes.push(name);
      }        
    });
    this.classe.set('name', name);
    this.mainEditorService.changeClassName(name);
  }
  /**
  * Retrives information from the template HTML of this component to build
  * a new attribute. If one or more parameter isn't present an error will be shown
  * @param nome the neme of the new attribute
  */
  addAttributo(nome: string, staticAtt: boolean, finalAtt: boolean, tipo: string, acc: string) {
    if (nome && tipo && acc) {
      try {
        this.mainEditorService.addAttributo(tipo, nome, acc, staticAtt, finalAtt);
      } catch (error) {
        if (error.message == 'NomePresente') {
          alert('Non è possibile inserire due attributi con lo stesso nome');
          return;
        }
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
      let attributes: string;
      if (staticAtt) {
        stat = 'static';
        attributi.push(vis + ' ' + stat + ' ' + nome + ' : ' + tipo);
        attributes= vis + ' ' + stat + ' ' + nome + ' : ' + tipo;
      }
      else if (finalAtt) {
        final = 'final';
        attributi.push(vis + ' ' + final + ' ' + nome + ' : ' + tipo);
        attributes= vis + ' ' + final + ' ' + nome + ' : ' + tipo;
      }
      else {
        attributi.push(vis + ' ' + nome + ' : ' + tipo);
        attributes= vis + ' ' + nome + ' : ' + tipo;
      }
      this.activityService.addAttributesClass(attributes);
      this.classe.set('attributes', null); // Hack per far funzionare l'event change:attrs
      this.classe.set('attributes', attributi);
      // Reset input field
      this.selectedAccAtt = 'public';
      this.selectedAccAttEdit = 'public';
      this.selectedTipoAtt = null;
      this.selectedTipoAttEdit = null;
      $('#nomeAttributo').val('');
      $('#finalAtt').prop('checked', false);
      $('#staticAtt').prop('checked', false);
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
      for (let i = 0; i < att.length; i++) {
        if (att[i] == nome) {
          return element;
        }
      }
    }), 1);
    this.classe.set('attributes', null);
    this.classe.set('attributes', attributi);
    this.mainEditorService.removeAttributo(nome);
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
  changeAttributo(name: string, oldName: string, tipo: string, acc: string, stat: boolean, final: boolean) {
    this.removeAttributo(oldName);
    this.addAttributo(name, stat, final, tipo, acc);
  }
  /**
  * This method return the class's attributes list
  */
  getAttributi() {
    return this.mainEditorService.getSelectedClasse().getAttributi();
  }
  /**
  * Retrives information from the template HTML of this component to build
  * a new method. If one or more parameter isn't present an error will be shown
  * @param nome
  */
  addMetodo(nome: string, staticMet: boolean, constructor: boolean, tipo: string, acc: string, params: any = null) {
    if ((nome && tipo && acc) || (constructor && acc)) {
      try {
        if (constructor == true) {
          nome = this.name;
          tipo = this.name;
        }
        this.mainEditorService.addMetodo(staticMet, constructor, tipo, nome, acc, params);
      } catch (error) {
        if (error.message == 'NomePresente') {
          alert('Non è possibile inserire due o più metodi con lo stesso nome');
          return;
        }
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
      let parametri: String = '';
      let methods: string;
      for (let ind = 0; ind < params.length; ind++) {
        parametri += params[ind].getNome() + ' : ' + params[ind].getTipo();
        if (ind != params.length - 1) {
          parametri += ', ';
        }
      }
      let st = '';
      if (staticMet) {
        st = 'static';
      }
      methods= vis + ' ' + st + ' ' + nome + ' ( ' + parametri + ' ) : ' + tipo;
      metodi.push(vis + ' ' + st + ' ' + nome + ' ( ' + parametri + ' ) : ' + tipo);
      this.activityService.addMethodClass(methods);
      this.classe.set('methods', null); // Hack per far funzionare l'event change:attrs
      this.classe.set('methods', metodi);
      this.selectedAccMet = 'public';
      this.selectedTipoMet = 'void';
      $('#nomeMetodo').val('');
      if (this.staticMetCheckbox != null)
        this.staticMetCheckbox.nativeElement.checked = false;
      if (this.constructorCheckbox != null)
        this.constructorCheckbox.nativeElement.checked = false;
      $('#tipiParam').val('');
      $('#nomeParam').val('');
      this.parametriMetodo = new Array<Param>(); // Cleans the array of params
    } else {
      alert('Alcuni capi del form per la creazione del nuovo metodo non sono stati compilati');
    }
  }
  /**
  * Removes a method of the given name from the class element and from the class object of type Classe
  * @param nome
  */
  removeMetodo(nome: string) {
    let metodi = this.classe.attributes.methods;
    metodi.splice(metodi.findIndex(element => {
      let met = element.split(' ');
      for (let i = 0; i < met.length; i++) {
        if (met[i] == nome) {
          return element;
        }
      }
    }), 1);
    this.classe.set('methods', null);
    this.classe.set('methods', metodi);
    this.mainEditorService.removeMetodo(nome);
    if (nome == 'main' && this.mainEditorService.getSelectedClasse().hasMain())
      this.mainEditorService.getSelectedClasse().setMain(false);
  }

  addType(name: string) {
    this.types.push(name);
    this.methodTypes.push(name);
  }

  /**
  * Set the editor in activity mode to modify the behavior of the method of the given name
  * @param nome name of method to modify
  */
  modifyMetodo(nome: string) {
    this.mainEditorService.enterActivityMode(nome);
    this.activityService.setSelectedMethod(this.mainEditorService.getSelectedClasse().retriveMethod(nome));
  }
  /**
  * This methos return the class's method list
  * @memberof ClassMenuService
  */
  getMetodi() {
    return this.mainEditorService.getSelectedClasse().getMetodi();
  }
  /**
  * This method remove the selected class
  * @param {string} name name of the class
  * @param {Classe} classe
  * @memberof ClassMenuService
  */
  removeClass(name: string, classe: Classe) {
    console.log(this.mainEditorService.getSelectedClasse().getNome());
    name = this.mainEditorService.getSelectedClasse().getNome();
    this.mainEditorService.removeClass(name, classe);
    this.types.forEach(element => {
      if(element==name) 
        this.types.splice(this.types.indexOf(element), 1);
    });
    this.methodTypes.forEach(element => {
      if(element==name) 
        this.methodTypes.splice(this.methodTypes.indexOf(element), 1);
    });
  }
  /**
  * This method return true only if the method is addable by logic
  * @memberof ClassMenuService
  */
  isMethodAddable() {
    if (!this.costruttore && !this.nomeMet) {
      return true;
    } else {
      return false;
    }
  }

  isThereAMain() {
    let m = false;
    this.mainEditorService.getClassList().forEach(c => {
      if (c.hasMain())
        m = true;
    });
    return m;
  }

  setMain() {
    console.log(this.mainEditorService.getSelectedClasse());
    this.mainEditorService.getSelectedClasse().setMain(true);
    console.log(this.mainEditorService.getSelectedClasse());
  }
  // JQUERY FUNCTION
  closeAllCollapsedList() {
    if ($('#listaMetodi').attr('aria-expanded')) {
      $('#listaMetodi').removeClass('in');
    }
    if ($('#listaAttributi').attr('aria-expanded')) {
      $('#listaAttributi').removeClass('in');
    }
    if ($('#aggiungiMetodo').attr('aria-expanded')) {
      $('#aggiungiMetodo').removeClass('in');
    }
    if ($('#aggiungiAttributo').attr('aria-expanded')) {
      $('#aggiungiAttributo').removeClass('in');
    }
  }

}


