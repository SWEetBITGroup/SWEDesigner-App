import { Injectable } from '@angular/core';

import { EditorComponent } from '../components/editor-container/components/editor/editor.component';
import { Classe } from '../components/editor-container/components/editor/models/classe';
import { Global } from '../models/global';
import { Metodo } from '../components/editor-container/components/editor/models/metodo';
import { Attributo } from '../components/editor-container/components/editor/models/attributo';

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
  /**
  * 'mainExist' is a flag which indicates if the main methos is created
  */
	private mainExist = false;
  /**
  * This string contain the array of the variable used into a method
  */
	varCode: string[];
  constructor() {}
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
	}

  /**
  * Search for a class, in the project's collection of classes,
  * which have the same name as the one given as parameter.
  * @param nome name of the class to search
  */
	selectClasse(nome: string) {
		this.project.getClassi().forEach(classe => {
			if (classe.getNome() == nome) {
				this.selectedClasse = classe;
			}
		});

		if (!this.selectedClasse)
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
  addAttributo(tipo: string, nome:string, acc: string, stat: boolean, fin: boolean) {
    this.editorComp.copiaAttr(tipo, nome, acc, stat, fin);
    this.editorComp.noChange= true;
    this.editorComp.changeMethod= true;
    this.selectedClasse.addAttributo(tipo,nome,acc,stat, fin);
    this.editorComp.aggiornaFigli(false, this.selectedClasse, new Attributo(tipo, nome, acc, stat, fin), null, nome, null)
    this.editorComp.setUndoRedo();
  }

  /**
  * Calls the removeAttr method of the ´selectedClasse´
  * @param nome is the name of the attribute to remove which is passed to the removeAttr method
  */
  removeAttributo(nome: string) {
    if(this.editorComp.fromUndo==true||this.editorComp.fromUndo==null) {
      this.editorComp.noChange= true;
      this.selectedClasse.removeAttr(nome);
      this.editorComp.setUndoRedo();
    }
    this.selectedClasse.removeAttr(nome);
    this.editorComp.aggiornaFigli(true, this.selectedClasse, null, null, nome, null)
  }
  /**
  * This function change the attribute value
  * @param oldName store the old name of attribute
  * @param name store the new name of attribute
  * @param type store the type of attribute
  * @param acc store the accessibility of attribute
  */
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
	enterClassMode(method: Metodo) {
		method.addDiagram(this.editorComp.graph.toJSON());
		this.editorComp.replaceDiagram(this.graph);
		this.activityMode = false;
		this.editorComp.resetModifica();
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
    this.editorComp.addedMethod= new Metodo(staticMet,costr,nome,acc,tipo,listArgs);
    this.editorComp.noChange= true;
    this.editorComp.changeMethod= true;
    this.selectedClasse.addMetodo(this.editorComp.addedMethod);
    this.editorComp.aggiornaFigli(false, this.selectedClasse, null, this.editorComp.addedMethod, null, null);
    this.editorComp.setUndoRedo();
  }

  /**
  * Calls removeMetodo of ´selectedClasse´
  * @param nome is the name of the method to eliminate, is passed as parameter to selectedClasse.removeMetodo
  */
  removeMetodo(nome: string) {
    if(this.editorComp.fromUndo==false||this.editorComp.fromUndo==null) {
      this.editorComp.noChange= true;
      this.editorComp.changeMethod= true;
      this.editorComp.classeEliminata= this.editorComp.selectedCell;
      this.editorComp.rMethod= this.selectedClasse.retriveMethod(nome);
      this.editorComp.addedMethod= null;
      this.editorComp.removedMethod= null;
      this.editorComp.setUndoRedo();
      this.selectedClasse.removeMetodo(nome);
      this.editorComp.setUndoRedo();
    }
    else this.selectedClasse.removeMetodo(nome);
    this.editorComp.aggiornaFigli(true, this.selectedClasse, null, null, null, nome);
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
			if (e.message == 'Metodo non presente')
				console.log('Il metodo non è presente nella classe')
		}
		if (!this.activityMode && metodo) {
			this.editorComp.replaceDiagram(metodo.getDiagram());
			this.activityMode = true;
			this.editorComp.selectedCell = null;
			this.editorComp.resetModifica();
		}
	}
  /**
  * This function check if the main function is created
  */
	isThereAMain() {
		return this.mainExist;
	}
  /**
  * This function add the link shape
  * @param connettore it refers to the shape to be linked
  */
	addConnettore(connettore: any) {
		this.editorComp.addConnettore(connettore);
	}
  /**
  * This function add the super class
  * @param subclassName class name
  * @param superclassName super class string value
  */
	addSuperclass(subclassName: string, superclassName: string) {
		console.log(subclassName);
		let subclass = this.getClass(subclassName);
		subclass.addSuperclass(superclassName);
  }

  /**
  * This funtion return the class selected by name
  * @param name class name
  */
	getClass(name: string) {
		return this.project.getClasse(name);
	}
  /**
  * This function return the project list
  */
	getProject() {
		return this.project;
	}
  /**
  * This function return all the shape into the grafh
  */
	retriveGraph() {
		this.project.setDiagramma(this.editorComp.graph.toJSON());
	}
  /**
  * This function imporrt the project selected by JSON file
  * @param importData file to be imported
  */
	importProject(importData) {
		let proj = JSON.parse(importData._body).data;
		console.log(JSON.parse(proj));
		let newProj = new Global();
		newProj.import(JSON.parse(proj));
		this.project = newProj;
		this.editorComp.replaceDiagram(JSON.parse(newProj.getDiagramma()));
	}

  /**
  * This function load a project from database into editor.
  * @param project file to be load
  */
  loadProject(project){
    console.log(project._body);
    let proj = project._body;
    let newProj = new Global();
    proj.project = JSON.parse(proj.project);
    newProj.import(proj);
    this.project = newProj;
    this.editorComp.replaceDiagram(JSON.parse(newProj.getDiagramma()));
  }
  /**
  * This function remove the class by name
  * @param name class name
  * @param classe it refers to the class shape
  */
  removeClass(name: string, classe) {
    this.editorComp.deleteElement(classe);
    this.project.removeClass(name);
  }
  /**
  * This function remove the shape into activity grafh
  * @param element shape selected to be removed
  */
  removeShapeActivity(element) {
    this.editorComp.deleteElement(element);
  }
  /**
  * This function add a shape into  grafh
  * @param cell shape selected
  */
  addShape(cell) {
    this.editorComp.addElement(cell);
  }
  /**
  * This function connect by link the activity shapes
  * @param con shape to be connected
  */
  connetActivity(con: any) {
    this.editorComp.addConnettore(con);
  }

  setConnetionActivity(ids: string[]) {
    console.log(ids);
  }
  /**
  * This function save all the translate diagram into 'varCode' variable
  * @param vars variables array string
  */
  setCode(vars: string[]) {
    this.varCode = vars;
  }
  /**
  * This function ask before do a refresh into the window
  */
  checkrefresh(){
    window.onbeforeunload = function(e){
      var text = "PAGINA REFRESHATA";
      e.returnValue = text;
      return text;
    }
  }

  addInterface(clss: string, inter: string) {
    let classe = this.getClass(clss);
    classe.addInterface(inter);
  }

}
