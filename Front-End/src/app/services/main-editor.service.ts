import { Injectable } from '@angular/core';

import { EditorComponent } from '../components/editor/editor.component';
import { Classe } from '../components/editor/models/classe';
import { Global } from '../models/global';
import { Metodo } from '../components/editor/models/metodo';

/**
 * 'MainEditorservice' stores information about the editor's canvas, the project 
 * and stores a direct access to the EditorComponent.
 * 'MainEditorservice' provides methods to interact with the EditorComponent and 
 * to modify a selected class which is present in the editor's canvas.
 */
@Injectable()
export class MainEditorService {
  /**
   * 'project' is used to store and retrive information about the current project
   */
  private project = new Global();
  /**
   * 'selectedClass' stores the corresponding class of tipe ´Classe´ of the 
   * selected class in the editor's canvas
   */
  private selectedClasse: Classe;
  /**
   * 'editorComponent' is used to access directly the EditorComponent
   */
  private editorComp: EditorComponent;
  /**
   * 'graph' is used to store the editor's graph
   */
  private graph: JSON;

  /**
   * 'activityMode' is a flag which indicates if the activity diagram is in use
   */
  private activityMode = false;

  constructor() {
  }

  /**
   * This method is used to set the instantiation of the EditorComponent as
   * internal property of this class
   * @param editCmp the EditorComponent instance
   */
  setEditorComp(editCmp: EditorComponent) {
    this.editorComp = editCmp;
  }

  /**
   * This method is used to retrive the array of classes present in the project
   */
  getClassList() {
    return this.project.getClassi();
  }

  /**
   * This method returns the selected class of type ´Classe´
   */
  getSelectedClasse() {
    return this.selectedClasse;
  }

  /**
   * Add an object of type Classe into the project's collection
   * @param classe this object is a representation, of type ´Classe´ or ´ClasseAstratta´, 
   * of the parameter graphelement.
   * @param graphElement this is an element of the graphical library JointJS 
   */
  addClass(classe: Classe, graphElement: any) {
    this.project.getClassi().push(classe);
    this.editorComp.addElement(graphElement);
    console.log(this.getClassList());
  }

  /**
   * Search for a class, in the project's collection of classes, 
   * which have the same name as the one given as parameter.
   * @param nome name of the class to search
   */
  selectClasse(nome: string) {
    this.project.getClassi().forEach(classe => {
      if(classe.getNome() == nome) {
        this.selectedClasse = classe;
      }
    });
    
    if(!this.selectedClasse)
      console.log('Classe mancante'); // TODO: spend a moment to code it as a real warning
  }

  /**
   * Sets the flag activityMode to true
   */
  setActivityMode() {
    this.activityMode = true;
  }
  /**
   * Sets the flas activityMode to false
   */
  setClassMode() {
    this.activityMode = false;
  }
  /**
   * Returns the current value of the flag activityMode
   * @returns if the status is true the activity mode is activated, 
   * if it's false the class mode is active.
   */
  getActivityModeStatus() {
    return this.activityMode;
  }

  /**
   * Calls the addAttribute method of the ´selectedClasse´
   * @param tipo is the type of the attribute to add as parameter to addAttributo 
   * @param nome is the name of the attribute to add as parameter to addAttributo
   * @param acc is the visibility of the attribute to add as parameter to addAttributo
   */
  addAttributo(tipo: string, nome:string, acc: string) {
    this.selectedClasse.addAttributo(tipo,nome,acc);
  }

  /**
   * Calls the removeAttr method of the ´selectedClasse´
   * @param nome is the name of the attribute to remove which is passed to the removeAttr method
   */
  removeAttributo(nome: string) {
    this.selectedClasse.removeAttr(nome);
  }

  changeAttributo(oldName: string, name: string, type: string, acc: string) {
    this.selectedClasse.changeAttr(oldName,type,name,acc);
  }

  /**
   * This method stores into the ´this.graph´ properties the graph given
   * @param graph Is a graph given in JSON format
   */
  storeGraph(graph: JSON) {
    this.graph = graph;
  }

  /**
   * Is used to restore the class diagram from the store graph, it calls 
   * the replaceDiagram method of the EditorComponent and then sets 
   * ´this.activityMode´ to false
   */
  enterClassMode(){
    this.editorComp.replaceDiagram(this.graph);
    this.activityMode = false;
  }

  /**
   * Calls the methods addMetodo of ´this.selectedClasse´ to add a new method into 
   * the selectedClasse
   * @param tipo type returned by the method, ´tipo´ is passed as parameter to ´selectedClasse.addMetodo´
   * @param nome is the name of the method, ´nome´ is passed as parameter to ´selectedClasse.addMetodo´
   * @param acc the visibility of the method, ´acc´ is passed as parameter to ´selectedClasse.addMetodo´
   * @param listArgs this parameter is optional, 'listArgs' is the list of parameters which defines the 
   * signature of the function
   */
  addMetodo(staticMet: boolean, costr: boolean, tipo: string, nome:string, acc: string, listArgs?: any) {
    this.selectedClasse.addMetodo(new Metodo(staticMet,costr,nome,acc,tipo,listArgs));
  }

  /**
   * Calls removeMetodo of ´selectedClasse´
   * @param nome is the name of the method to eliminate, is passed as parameter to selectedClasse.removeMetodo
   */
  removeMetodo(nome: string) {
    this.selectedClasse.removeMetodo(nome);
  }

  /**
   * This method search for a method into the selectedClasse and retrives it's diagram
   * to call editorComp's replaceDiagram which loads the method's diagram into the canvas.
   * Then sets the flag ´this.activityMode´ to true
   * @param name name of the method to find
   */
  enterActivityMode(name: string) {
    try {
      var metodo = this.selectedClasse.retriveMethod(name);
    } catch (e) {
      if(e.message == 'Metodo non presente')
        console.log('Il metodo non è presente nella classe')
    }
    if(!this.activityMode && metodo) {
      this.editorComp.replaceDiagram(metodo.getDiagram());
      this.activityMode = true;
      this.editorComp.selectedCell = null;
    }
  }

  addConnettore(connettore: any) {
    this.editorComp.addConnettore(connettore);
  }

  addSuperclass(subclassName: string, superclassName: string) {
    console.log(subclassName);
    let subclass = this.getClass(subclassName);
    subclass.addSuperclass(superclassName);
  }

  getClass(name: string) {
    return this.project.getClasse(name);
  }

  getProject() {
    return this.project;
  }

  retriveGraph() {
    this.project.setDiagramma(this.editorComp.graph.toJSON());
  }

  importProject(importData) {
    let proj = JSON.parse(importData._body).data;
    let newProj = new Global();
    newProj.import(JSON.parse(proj));
    this.project = newProj;
    this.editorComp.replaceDiagram(JSON.parse(newProj.getDiagramma()));
  }

}
