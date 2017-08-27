import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';

import { ClassMenuService } from './services/class-menu.service';
import { MenuService } from '../../../../services/menu.service';
import { MainEditorService } from '../../../../services/main-editor.service';
import { Subscription } from 'rxjs/Subscription';

import { ActivityService } from './services/activity.service';

import { Classe } from './models/classe';
import { Interface } from './models/interface';
import { ClasseAstratta } from './models/classe-astratta';
import { Attributo } from './models/attributo';


declare var $: JQueryStatic;
import * as _ from 'lodash';
import * as backbone from 'backbone';
import * as joint from 'jointjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // }
  providers: [ClassMenuService]
})

/**
* This class is the main component used to drae the UML shapes
*/
export class EditorComponent implements OnInit {
  /**
  * is the model holding all the cells (elements and links) of the diagram.
  */
  graph: any;
  /**
  * is the view for the joint.dia.Graph model.When a paper is associated with a graph, the paper makes sure that all the cells added to the graph are automatically rendered.
  */
  paper: any;
  /**
  * is used to scale the graph
  */
  public xAx: number = 1;
  /**
  * is an subscription to allow the zoom function
  */
  sub: Subscription;
  /**
  * it point to the selected element by the click on it
  */
  selectedCell: any;
  /**
  * it point to the selected comment element by the click on it
  */
  selectedCellComment: any;
  /**
  * it point to the copied element after the click on "Copia" or "Taglia"
  */
  copiedElement: any;
  /**
  * This flag indicates if the copiedElement is to past for cut o for copy
  */
  flagCut: boolean;
  /**
  * is the type of the link shape selected
  */
  connettore: any;
  /**
  * it points to the selected element by the click on it, that will be connect by a link shape
  */
  elementToConnect: any;
  /**
  * It points to the graph after a undo
  */
  undoGraph: any;
  /**
  * It points to the graph after a redo
  */
  redoGraph: any;
  /**
  * It points to the actual graph
  */
  actualGraph: any;
  /**
  * It counts the copies to the same element
  */
  countCopies: any;
  /**
  * This flag indicates if you have to listen to the add event of the graph
  */
  flagAdded: any;
  /**
  * This flag indicates if you have to listen to the remove event of the graph
  */
  flagRemoved: any;
  /**
  * It indicates to undo method if a method are added
  */
  addedMethod: any;
  /**
  * It indicates to undo method if a method are removed
  */
  removedMethod: any;
  /**
  * It indicates to redo method if a method are removed
  */
  rMethod: any;
  /**
  * It indicates to redo method if a method are added
  */
  aMethod: any;
  /**
  * It indicates to redo the class that was deleted
  */
  classeEliminata: any;
  /**
  * It indicates if the undo method call others methods
  */
  fromUndo: any;
  /**
  * It indicates if the event "change" had to be listened
  */
  changeMethod: any;
  /**
  * It indicates if the event "change" had to be listened
  */
  noChange: any;
  /**
  * It indicates if the event "change" had to be listened
  */
  bloccaChange: any;
  /**
  * It indicates to undo the attribute that was added
  */
  addedAttribute: any;
  /**
  * It indicates to redo the attribute that was removed
  */
  removedAttribute: any;
  /**
  * It points to the element to select after a called of undo method
  */
  puntElement: any;
  /**
  * It save the methods of interface after a association
  */
  interfaceMethods: any;
  /**
  * It save the attributes of class after a generalization
  */
  extendedAttributes: any;
  /**
  * It save the methods of class after a generalization
  */
  extendedMethods: any;
  /**
  * It save the methods to delete after that a association was delate
  */
  methodsToDelete: any;
  /**
  * It save the attributes to delete after that a association eas delate
  */
  attributesToDelete: any;
  /**
  * It indicates if the shape is a comment
  */
  isComment: boolean = false;
  /**
  * It indicates the shape'x coordinate selected
  */
  xPos: any;
  /**
  * It indicates the shape'y coordinate selected
  */
  yPos: any;
  /**
  * It indicates the with of the shape selected
  */
  xSize: any;
  /**
  * It indicates if the instructions in this.graph.on(remove) had to been done
  */
  flagGraph: any;

  /**
  * this constructor bind this class with the services use for callback function and draw the grid in the canvas
  * @param classMenuService used to create a new instantiation of MenuService
  * @param menuService used to create a new instantiation of EditService
  * @param mainEditorService used to create a new instantiation of MainEditorService
  * @param activityService used to create a new instantiation of ActivityService
  */
  constructor(private classMenuService: ClassMenuService,
    private menuService: MenuService,
    private mainEditorService: MainEditorService,
    private activityService: ActivityService) {
    this.selectedCell = null;

    // Subscribe all'oggetto observable per la funzione di zoom e di copia
    this.sub = menuService.selectedGrapg$.subscribe(
      (x) => {
        if (x == '+')
          this.zoomIn();
        else if (x == '-')
          this.zoomOut();
        else if (x == 'copied')
          this.copyElement();
        else if (x == 'pasted')
          this.pasteElement();
        else if (x == 'cuted')
          this.cutElement();
        else if (x == 'undo')
          this.undo();
        else if (x == 'redo')
          this.redo();
        else if (x == 'elimina')
          this.elimina();
      }
    );
    this.mainEditorService.checkrefresh();
  }
  ngOnInit() {
    this.flagGraph = true;
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: $("#paper"),
      width: $('#paper').width(),
      height: $('#paper').height(),
      gridSize: 10,
      model: this.graph
    });
    this.paper.drawGrid("dot");
    this.paper.scale(this.xAx, this.xAx);
    /**
    * This method allows to recognize when there is a resize of the page
    */
    window.addEventListener('resize', (event) => {
      let height1 = $('#editor').height();
      let width1 = $('#editor').width() - 100;
      this.paper.setDimensions(width1, height1);
    });
    /**
    * This method allows to recognize when there is a change in the graph
    */
    this.graph.on('change', () => {
      if (this.noChange == false || this.noChange == null) {
        if (this.actualGraph != null) {
          if (this.aMethod != null && this.bloccaChange == true) {
            this.bloccaChange = false;
            this.aMethod = null;
            let metodi = this.classMenuService.classe.attributes.methods;
            metodi.splice(metodi.findIndex(element => {
              let met = element.split(' ');
              this.bloccaChange = false;
              for (let i = 0; i < met.length; i++) {
                if (met[i] == this.aMethod.getNome())
                  return element;
              }
            }), 1);
            this.classMenuService.classe.set('methods', null);
            this.classMenuService.classe.set('methods', metodi);
            this.aMethod = null;
            this.bloccaChange = false;
          }
          else {
            if (this.undoGraph == null) { this.undoGraph = new joint.dia.Graph; }
            this.undoGraph.clear();
            this.actualGraph.getCells().forEach(element => {
              this.undoGraph.addCell(element.clone());
            });
            this.actualGraph.clear();
            this.redoGraph = null;
          }
        }
        else this.actualGraph = new joint.dia.Graph;
        this.graph.getCells().forEach(element => {
          this.actualGraph.addCell(element.clone());
        });
      }
      this.flagAdded = false;
      this.flagRemoved = false;
      if (this.changeMethod == false || this.changeMethod == null) {
        this.addedMethod = null;
        this.addedAttribute = null;
        this.removedAttribute = null;
        this.removedMethod = null;
        this.rMethod = null;
        this.bloccaChange = false;
      }
      this.noChange = false;
    });
    /**
    * This method allows to recognize when there is a add event in the graph
    */
    this.graph.on('add', (cell) => {
      if (this.noChange == false || this.noChange == null) {
        if (this.flagAdded != false) {
          if (this.actualGraph == null) { this.actualGraph = new joint.dia.Graph; }
          if (this.undoGraph == null) { this.undoGraph = new joint.dia.Graph; }
          this.undoGraph.clear();
          this.actualGraph.getCells().forEach(element => {
            this.undoGraph.addCell(element.clone());
          });
          this.actualGraph.clear();
          this.graph.getCells().forEach(element => {
            this.actualGraph.addCell(element.clone());
          });
        }
        this.flagAdded = true;
        this.noChange = false;
      }
      this.noChange = false;
    });

    /**
    * This method allows to recognize when there is a remove event in the graph
    */
    this.graph.on('remove', (cell) => {
      if (((cell.attributes.type == 'uml.Implementation')
        || (cell.attributes.type == 'uml.Generalization')) && this.flagGraph == true) {
        let padre: Classe;
        let figlio: Classe;
        this.graph.getCells().forEach(element => {
          if (element.id === cell.get('source').id) {
            padre = this.mainEditorService.getClass(element.attributes.name);
            this.methodsToDelete = padre.getMetodi();
            this.attributesToDelete = padre.getAttributi();
          }
        });
        this.graph.getCells().forEach(element => {
          if (element.id === cell.get('target').id) {
            figlio = this.mainEditorService.getClass(element.attributes.name);
            if (cell.attributes.type == 'uml.Implementation')
              this.methodsToDelete.forEach(met => {
                figlio.removeMetodo(met.getNome());
                this.removeMetodoGraph(met.getNome(), element)
              });
            else
              this.methodsToDelete.forEach(met => {
                figlio.removeMetodo(met.getNome());
              });
            this.attributesToDelete.forEach(attr => {
              figlio.removeAttr(attr.getNome());
            });
          }
        });
      }
      if (this.noChange == null || this.noChange == false) {
        if (this.flagRemoved == true) {
          if (this.actualGraph == null) { this.actualGraph = new joint.dia.Graph; }
          if (this.undoGraph == null) { this.undoGraph = new joint.dia.Graph; }
          this.undoGraph.clear();
          this.actualGraph.getCells().forEach(element => {
            this.undoGraph.addCell(element.clone());
          });
          this.actualGraph.clear();
          this.graph.getCells().forEach(element => {
            this.actualGraph.addCell(element.clone());
          });
          this.flagRemoved = false;
        }
      }
      this.noChange = false;
    });

    /**
    * This method allows to the mouse's pointer to recognize when a class is clicked and select it
    */
    this.paper.on('cell:pointerdown', (cellView) => {
      let commento: string = cellView.model.attributes.type;
      if (commento != 'basic.TextBlock') {
        if (!this.connettore) {
          let type = cellView.model.attributes.type;
          if ((type != 'uml.Generalization') &&
            (type != 'uml.Implementation') &&
            (type != 'uml.Association') &&
            (type != 'fsa.Arrow')) {
            this.elementSelection(cellView);
          }
        }
        else if (!this.mainEditorService.getActivityModeStatus())
          this.selectElementsToConnect(cellView);
        else
          this.selectElementActivity(cellView);
      }
      else if (this.connettore)
        this.selectElementsToConnect(cellView);
    });
    /**
    * This method allows to the mouse's pointer to recognize when a comment is clicked and select it  by double click
    */
    this.paper.on('cell:pointerdblclick', (cellView) => {
      let commento: string = cellView.model.attributes.type;
      let position = cellView.model.attributes.position;
      let size = cellView.model.attributes.size;
      this.xPos = position.x;
      this.yPos = position.y;
      this.xSize = size.width;
      if (commento == 'basic.TextBlock') {
        this.isComment = true;
        this.selectedCellComment = cellView;
        $('.boxComment').css({ top: (this.yPos), left: (this.xSize + this.xPos + 100), position: 'absolute' });
      }
    });
    /**
    * This method allows to the mouse's pointer to recognize when the class is unselected by click outside that shape
    */
    this.paper.on('blank:pointerdown', () => {
      this.isComment = false;
      if (this.selectedCell) {
        this.selectedCell.unhighlight(null/* defaults to cellView.el */, {
          highlighter: {
            name: 'stroke',
            options: {
              width: 3,
              color: '#885500'
            }
          }
        });
        this.selectedCell.unhighlight();
        this.classMenuService.closeAllCollapsedList();
        this.isComment = false;
      }
      this.selectedCell = null;
      this.elementToConnect = null;
      this.extendedAttributes = null;
      this.extendedMethods = null;
      this.interfaceMethods = null;
      this.connettore = null;
      $('.freccia').blur();
      this.activityService.deselectElement();
    });

    // this.mainEditorService.storeGraph(this.graph.toJSON()); // ELIMINARE
    this.mainEditorService.setEditorComp(this);
  }
  /**
  *  This method is used to replace the editor with a new windows with the contents in the JSON file
  *  @param graph this variable is the JSON file
  */
  replaceDiagram(graph: JSON) {
    if (graph) {
      this.flagGraph = false;
      if (!this.mainEditorService.getActivityModeStatus())
        this.mainEditorService.storeGraph(this.graph.toJSON());
      else
        this.flagGraph = true;
      this.graph.clear();
      this.graph.fromJSON(graph);
    }
  }
  /**
  * This method is used to select the element to be connectted by the connector
  * @param cell this variable refers to the selected shape
  */
  selectElementsToConnect(cell: any) {
    if (this.elementToConnect) {
      if (this.elementToConnect.model.id != cell.model.id) {
        if (cell.model.attributes.type != 'basic.TextBlock') this.elementSelection(cell);
        if (this.connettore.attributes.type == 'uml.Association') {
          let freccia = new this.connettore.constructor({
            source: { id: this.elementToConnect.model.id },
            target: { id: cell.model.id }
          });
          if (cell.model.attributes.type == 'uml.Interface') this.graph.addCell(freccia);
        } else if ((this.connettore.attributes.type == 'uml.Generalization')
          && (cell.model.attributes.type == 'uml.Class')) {
          this.mainEditorService.addSuperclass(this.elementToConnect.model.attributes.name,
            cell.model.attributes.name);
          this.extendedAttributes.forEach(element => {
            this.mainEditorService.addAttributo(element.getTipo(),
              element.getNome(),
              element.getAccesso(),
              element.isStatic(),
              element.isFinal());
          });
          this.extendedMethods.forEach(element => {
            this.mainEditorService.addMetodo(element.isStatic(),
              element.isConstructor(),
              element.getTipoRitorno(),
              element.getNome(),
              element.getAccesso(),
              element.getListaArgomenti())
          });
        }
        else {
          if (this.interfaceMethods != null && cell.model.attributes.type != 'basic.TextBlock') {
            this.mainEditorService.addInterface(cell.model.attributes.name,this.elementToConnect.model.attributes.name);
            console.log(this.mainEditorService.getClassList());
            this.elementSelection(cell);
            this.interfaceMethods.forEach(element => {
              this.classMenuService.addMetodo(element.getNome(),
                element.isStatic(),
                false, element.getTipoRitorno(),
                element.getAccesso(),
                element.getListaArgomenti());
            });
          }
        }
        $('.freccia').blur();
        this.elementToConnect.unhighlight(null/* defaults to cellView.el */, {
          highlighter: {
            name: 'stroke',
            options: {
              width: 3,
              color: '#885500'
            }
          }
        });
        if ((cell.model.attributes.type != 'basic.TextBlock')
          && ((cell.model.attributes.type != 'uml.Interface')
            || ((this.connettore.attributes.type == 'uml.Implementation')
              && (this.interfaceMethods != null)))) {
          let element1 = this.elementToConnect;
          let freccia = new this.connettore.constructor({
            source: { id: cell.model.id },
            target: { id: element1.model.id }
          });
          this.graph.addCells([freccia]);
          this.elementToConnect = this.connettore = null;
          cell.unhighlight(null/* defaults to cellView.el */, {
            highlighter: {
              name: 'stroke',
              options: {
                width: 3,
                color: '#885500'
              }
            }
          });
        }
        else {
          if (this.selectedCell) {
            this.selectedCell.unhighlight();
            this.classMenuService.closeAllCollapsedList();
          }
          this.selectedCell = null;
          this.activityService.deselectElement();
          this.connettore = null;
          this.elementToConnect = null;
        }
      }
    }
    else {  //PRIMO ELEMENTO SELEZIONATO
      this.interfaceMethods = null;
      this.elementToConnect = cell;
      if (cell.model.attributes.type != 'basic.TextBlock') this.elementSelection(cell);
      if (this.connettore.attributes.type == 'uml.Association') {
        if (cell.model.attributes.type != 'basic.TextBlock') {
          this.elementToConnect = null;
          if (this.selectedCell) {
            this.selectedCell.unhighlight();
            this.classMenuService.closeAllCollapsedList();
          }
          this.selectedCell = null;
          this.activityService.deselectElement();
          this.connettore = null;
          $('.freccia').blur();
          // alert('Selezionare prima il commento');
          return;
        }
      }
      else if (this.connettore.attributes.type == 'uml.Implementation') {
        if (cell.model.attributes.type == 'uml.Interface') {
          this.interfaceMethods = this.classMenuService.getMetodi();
          cell.highlight(null/* defaults to cellView.el */, {
            highlighter: {
              name: 'stroke',
              options: {
                width: 3,
                color: '#885500'
              }
            }
          });
        }
        else {
          this.elementToConnect = null;
          if (this.selectedCell) {
            this.selectedCell.unhighlight();
            this.classMenuService.closeAllCollapsedList();
          }
          this.selectedCell = null;
          this.activityService.deselectElement();
          this.connettore = null;
          $('.freccia').blur();
          // alert("L'implementazione deve essere eseguita su un'interfaccia");
        }
      }
      else if (cell.model.attributes.type == 'uml.Interface'
        || cell.model.attributes.type == 'basic.TextBlock') {
        $('.freccia').blur();
        this.elementToConnect = null;
        if (this.selectedCell) {
          this.selectedCell.unhighlight();
          this.classMenuService.closeAllCollapsedList();
        }
        this.selectedCell = null;
        this.activityService.deselectElement();
        this.connettore = null;
        // alert("La generalizzazione deve essere eseguita su una classe");
      }
      else if (cell.model.attributes.type != 'basic.TextBlock') {
        this.extendedMethods = this.classMenuService.getMetodi();
        this.extendedAttributes = this.classMenuService.getAttributi();
        cell.highlight(null/* defaults to cellView.el */, {
          highlighter: {
            name: 'stroke',
            options: {
              width: 3,
              color: '#885500'
            }
          }
        });
      }
    }
  }
  /**
  * This method add a link to the class
  * @param connettore this variable refers to the link shape
  */
  addConnettore(connettore: any) {
    this.connettore = connettore;
  }
  /**
  * This method select a shape in the editor
  * @param cellView
  */
  elementSelection(cellView: any) {
    if (this.selectedCell) {
      this.selectedCell.unhighlight();
    }
    cellView.highlight();
    if (!this.mainEditorService.getActivityModeStatus()) {
      this.selectedCell = cellView;
      this.classMenuService.classSelection(cellView.model);
      this.mainEditorService.selectClasse(cellView.model.attributes.name);
    } else {
      this.selectedCell = cellView;
      this.activityService.setSelectedElement(cellView.model);
    }
  }
  /**
  * This method update the method and the attributes of alla the sons of the class 'dad'
  * @param removed indicates if the class's sons had to remove an attribute or a method
  * @param dad indicates the class
  * @param attr indicates the attribute to add
  * @param met indicates the method to add
  * @param nomeAtt indicates the attribute to remove
  * @param nomeMet indicates the method to remove
  */
  aggiornaFigli(removed: boolean, dad: Classe, attr: any, met: any, nomeAtt: string, nomeMet: string) {
    let padre;
    this.graph.getCells().forEach(el => {
      if (el.attributes.name == dad.getNome()) padre = el;
    });
    let links = this.graph.getConnectedLinks(padre);
    links.forEach(element => {
      this.graph.getCells().forEach(cell => {
        if ((cell.id == element.get('target').id)
          && (padre.id == element.get('source').id)
          && (element.attributes.type != 'uml.Association')) {
          let figlio: Classe;
          figlio = this.mainEditorService.getClass(cell.attributes.name);
          if (attr != null || nomeAtt != null) {
            if (removed == true)
              figlio.removeAttr(nomeAtt);
            else {
              figlio.addAttributo(attr.getTipo(),
                attr.getNome(),
                attr.getAccesso(),
                attr.isStatic(),
                attr.isFinal());
            }
          }
          else {
            if (removed == true) {
              if (element.attributes.type == 'uml.Implementation') {
                this.removeMetodoGraph(nomeMet, cell);
                figlio.removeMetodo(nomeMet);
              }
              else
                figlio.removeMetodo(nomeMet);
            }
            else {
              if (element.attributes.type == 'uml.Implementation') {
                figlio.addMetodo(met);
                this.addMetodoGraph(met.getNome(),
                  met.isStatic(),
                  met.isConstructor(),
                  met.getTipoRitorno(),
                  met.getAccesso(),
                  met.getListaArgomenti(),
                  cell);
              }
              else {
                figlio.addMetodo(met);
              }
            }
          }
        }
      });
    });
  }
  /**
  * This method add to the cell 'class' a method
  * @param nome indicates the name of the method
  * @param staticMet indicates if the method is static
  * @param constructor indicates if the method is a constructor
  * @param tipo indicates the type of the method
  * @param acc indicates the accessibility of the method
  * @param params indicates the parametrs of the method
  * @param classe indicates the cell
  */
  addMetodoGraph(nome: string, staticMet: boolean, constructor: boolean,
    tipo: string, acc: string, params: any = null, classe: any) {
    if ((nome && tipo && acc) || (constructor && acc)) {
      let metodi = classe.attributes.methods;
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
      metodi.push(vis + ' ' + st + ' ' + nome + ' ( ' + parametri + ' ) : ' + tipo);
      classe.set('methods', null);
      classe.set('methods', metodi);
    }
  }
  /**
  * This method remove a method to the cell 'classe'
  * @param nome indicates the name of the method to remove
  * @param classe indicates the cell
  */
  removeMetodoGraph(nome: string, classe: any) {
    let metodi = classe.attributes.methods;
    metodi.splice(metodi.findIndex(element => {
      let met = element.split(' ');
      for (let i = 0; i < met.length; i++) {
        if (met[i] == nome) {
          return element;
        }
      }
    }), 1);
    classe.set('methods', null);
    classe.set('methods', metodi);
  }
  /**
  * This method add to the editor an element
  * @param element
  */
  addElement(element: any) {
    this.graph.addCell(element);
  }
  /**
  * This method increase the scale of the editor
  */
  zoomIn() {
    this.xAx += (0.05);
    this.paper.scale(this.xAx, this.xAx);
  }
  /**
  * This method decrease the scale of the editor
  */
  zoomOut() {
    this.xAx -= (0.05);
    this.paper.scale(this.xAx, this.xAx);
  }
  /**
  * This method clone the selected element
  */
  cloneElement() {
    let clone = this.selectedCell.model.clone();
    clone.translate(80, 80);
    this.graph.addCell(clone);
  }

  deleteElement(cell: any) {
    this.flagRemoved = true;
    this.graph.removeCells(cell);
    this.selectedCell = null;
  }
  /**
  * This method copy the selected element
  */
  copyElement() {
    if (this.selectedCell != null) {
      this.copiedElement = this.selectedCell;
      this.flagCut = false;
      this.countCopies = 0;
    }
  }
  /**
  * This method pastes the element copied earlier
  */
  pasteElement() {
    if (this.copiedElement != null) {
      this.elementSelection(this.copiedElement);
      if (!this.mainEditorService.getActivityModeStatus()) {
        if (this.flagCut == false) {
          let nome = this.selectedCell.model.getClassName();
          this.classMenuService.changeClassName(nome + '_copia' + this.countCopies);
          if (this.selectedCell.model.attributes.type == 'uml.Class') {
            let nomeClasse = new Classe(this.copiedElement.model.getClassName());
            this.mainEditorService.getSelectedClasse().getMetodi().forEach(element => {
              nomeClasse.addMetodo(element);
            });
            this.mainEditorService.getSelectedClasse().getAttributi().forEach(element => {
              nomeClasse.addAttributo(element.getTipo(), element.getNome(), element.getAccesso(),
                element.isStatic(), element.isFinal());
            });
            this.mainEditorService.addClass(nomeClasse, this.copiedElement.model.clone());
          }
          if (this.selectedCell.model.attributes.type == 'uml.Interface')
            this.mainEditorService.addClass(new Interface(this.copiedElement.model.getClassName() + '_copia' + this.countCopies),
              this.copiedElement.model.clone());
          if (this.selectedCell.model.attributes.type == 'uml.Abstract') {
            let nomeClasse = new ClasseAstratta(this.copiedElement.model.getClassName());
            this.mainEditorService.getSelectedClasse().getMetodi().forEach(element => {
              nomeClasse.addMetodo(element);
            });
            this.mainEditorService.getSelectedClasse().getAttributi().forEach(element => {
              nomeClasse.addAttributo(element.getTipo(), element.getNome(), element.getAccesso(),
                element.isStatic(), element.isFinal());
            });
            this.mainEditorService.addClass(nomeClasse, this.copiedElement.model.clone());
          }
          this.classMenuService.changeClassName(nome);
          if (this.countCopies != null) this.countCopies = 1 + this.countCopies;
          else this.countCopies = 0;
        }
        else {
          if (this.selectedCell.model.attributes.type == 'uml.Class')
            this.mainEditorService.addClass(new Classe(this.copiedElement.model.getClassName()),
              this.copiedElement.model.clone());
          if (this.selectedCell.model.attributes.type == 'uml.Interface')
            this.mainEditorService.addClass(new Interface(this.copiedElement.model.getClassName()),
              this.copiedElement.model.clone());
          if (this.selectedCell.model.attributes.type == 'uml.Abstract')
            this.mainEditorService.addClass(new ClasseAstratta(this.copiedElement.model.getClassName()),
              this.copiedElement.model.clone());
          this.flagCut = false;
          this.copiedElement = null;
        }
      }
      else {
        if (this.selectedCell.model.attributes.type == 'uml.StartState')
          this.activityService.addStart(this.copiedElement.model.clone());
        if (this.selectedCell.model.attributes.type == 'uml.EndState')
          this.activityService.addEnd(this.copiedElement.model.clone());
        if (this.selectedCell.model.attributes.type == 'erd.Relationship' && this.selectedCell.model.attributes.attrs.text.text == 'Decision')
          this.activityService.addIfNode(this.copiedElement.model.clone());
        if (this.selectedCell.model.attributes.type == 'basic.Rect')
          this.activityService.addOperation(this.copiedElement.model.clone());
        if (this.selectedCell.model.attributes.type == 'erd.Relationship' && this.selectedCell.model.attributes.attrs.text.text == '')
          this.activityService.addMergeNode(this.copiedElement.model.clone());
        if (this.flagCut == true)
          this.copiedElement = null;
      }
    }
  }
  /**
  * This method cut the selected element
  */
  cutElement() {
    if (this.selectedCell != null) {
      this.copiedElement = this.selectedCell;
      if (!this.mainEditorService.getActivityModeStatus())
        this.classMenuService.removeClass(this.selectedCell.model.getClassName(), this.selectedCell.model);
      else {
        this.deleteElement(this.selectedCell.model);
      }
      this.flagCut = true;
    }
  }
  /**
  * This method delete the selected element
  */
  elimina() {
    if (this.selectedCell != null)
      this.deleteElement(this.selectedCell.model);
  }
  /**
  * This method undo the last change in the graph
  */
  undo() {
    this.fromUndo = true;
    if (this.undoGraph != null) {
      if (this.addedAttribute != null) {
        this.puntElement = this.selectedCell;
        this.classMenuService.removeAttributo(this.addedAttribute.getNome());
        this.noChange = true;
        this.removedAttribute = this.addedAttribute;
      } else
        if (this.addedMethod != null) {
          this.mainEditorService.removeMetodo(this.addedMethod.getNome());
          this.removedMethod = this.addedMethod;
        } else if (this.rMethod != null) {
          this.classMenuService.parametriMetodo = this.rMethod.getListaArgomenti();
          this.aMethod = this.rMethod;
          this.elementSelection(this.classeEliminata);
          this.classMenuService.addMetodo(this.rMethod.getNome(), this.rMethod.isStatic(), this.rMethod.isConstructor(),
            this.rMethod.getTipoRitorno(), this.rMethod.getAccesso());
          this.classeEliminata = null;
        }
      this.redoGraph = new joint.dia.Graph;
      if (this.rMethod == null) this.aMethod = null;
      this.graph.getCells().forEach(element => {
        this.redoGraph.addCell(element.clone());
      });
      if (this.rMethod == null) {
        this.graph.getCells().forEach(element => {
          this.graph.removeCells(element);
          this.selectedCell = null;
        });
        this.undoGraph.getCells().forEach(element => {
          this.graph.addCell(element.clone());
        });
      }
      this.undoGraph.clear();
      this.undoGraph = null;
      this.actualGraph.clear();
      this.graph.getCells().forEach(element => {
        this.actualGraph.addCell(element.clone());
      });
    }
    this.changeMethod = false;
    this.noChange = false;
    this.fromUndo = false;
  }
  /**
  * This method redo the last change in the graph
  */
  redo() {
    if (this.redoGraph != null) {
      if (this.changeMethod == false)
        if (this.removedAttribute != null) {
          this.noChange = true;
          this.classMenuService.addAttributo(this.removedAttribute.getNome(), this.removedAttribute.isStatic(), this.removedAttribute.isFinal(),
            this.removedAttribute.getTipo(), this.removedAttribute.getAccesso());
        }
      if (this.removedMethod != null) {
        this.noChange = true;
        this.elementSelection(this.puntElement);
        this.puntElement = null;
        this.mainEditorService.addMetodo(this.removedMethod.isStatic(), this.removedMethod.isConstructor(), this.removedMethod.getTipoRitorno(),
          this.removedMethod.getNome(), this.removedMethod.getAccesso(), this.removedMethod.getListaArgomenti());
      }
      else if (this.aMethod != null) {
        this.classMenuService.removeMetodo(this.aMethod.getNome());
        this.bloccaChange = true;
      }
      this.flagAdded = false;
      if (this.undoGraph == null) this.undoGraph = new joint.dia.Graph;
      this.undoGraph.clear();
      this.actualGraph.getCells().forEach(element => {
        this.undoGraph.addCell(element.clone());
      });
      if (this.aMethod == null && this.removedAttribute == null) {
        this.graph.getCells().forEach(element => {
          this.graph.removeCells(element);
          this.selectedCell = null;
        });
        this.redoGraph.getCells().forEach(element => {
          this.graph.addCell(element.clone());
        });
      } else {
        this.bloccaChange = false;
        this.aMethod = null;
      }
      this.redoGraph = null;
      this.actualGraph.clear();
      this.graph.getCells().forEach(element => {
        this.actualGraph.addCell(element.clone());
      });
    }
    this.removedMethod = null;
    this.removedAttribute = null;
    this.changeMethod = false;
    this.fromUndo = false;
  }
  /**
  * This function copies the newly created attribute
  */
  copiaAttr(tipo: string, nome: string, acc: string, stat: boolean, fin: boolean) {
    this.addedAttribute = new Attributo(tipo, nome, acc, stat, fin);
  }
  /**
  * This method update the actualGraph and undoGraph
  */
  setUndoRedo() {
    if (this.actualGraph != null) {
      if (this.undoGraph == null) { this.undoGraph = new joint.dia.Graph; }
      this.undoGraph.clear();
      this.actualGraph.getCells().forEach(element => {
        this.undoGraph.addCell(element.clone());
      });
      this.actualGraph.clear();
    }
    else this.actualGraph = new joint.dia.Graph;
    this.graph.getCells().forEach(element => {
      this.actualGraph.addCell(element.clone());
    });
    this.flagAdded = false;
    this.flagRemoved = false;
  }
  /**
  * This method resets the state of the tasks in "Modifica"
  */
  resetModifica() {
    this.actualGraph = null;
    this.undoGraph = null;
    this.redoGraph = null;
    this.copiedElement = null;
  }
  /**
  * This function select one shape of the activity diagram
  * @param cell this variable refers to the selected shape
  */
  selectElementActivity(cell: any) {
    if (this.elementToConnect) {
      let element1 = this.elementToConnect;
      let freccia = new this.connettore.constructor({
        source: { id: element1.model.id },
        target: { id: cell.model.id }
      });
      this.graph.addCells([freccia]);
      this.elementToConnect.unhighlight();
      this.elementToConnect = this.connettore = null;
      this.activityService.setConnector([element1.model.id, cell.model.id]);
    } else {
      this.elementToConnect = cell;
      cell.highlight();
    }
  }
  /**
  * This function set the comment off
  */
  commentOff() {
    this.isComment = false;
  }
  /**
  * This Function change the comment value
  * @param testo is the new value of the comment
  */
  changeCommento(testo: string) {
    if (testo) {
      this.selectedCellComment.model.set('content', testo);
      (<HTMLInputElement>document.getElementById('newCommento')).value = '';
      this.isComment = false;
      this.selectedCellComment = null;
    }
  }
  /**
  * This function remove the selected comment
  */
  removeCommento() {
    this.selectedCellComment.model.remove();
    this.isComment = false;
  }
}
