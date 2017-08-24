import { Component, OnInit , AfterViewInit, Input, ViewChild } from '@angular/core';

import { ClassMenuService } from './services/class-menu.service';
import { MenuService } from '../../../../services/menu.service';
import { MainEditorService } from '../../../../services/main-editor.service';
import { Subscription } from 'rxjs/Subscription';

import { ActivityService } from './services/activity.service';

import { Classe } from './models/classe';
import { Interface } from './models/interface';
import { ClasseAstratta } from './models/classe-astratta';
import { Attributo } from './models/attributo';


declare var $:JQueryStatic;
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
  public xAx: number =1;

  /**
  * is an subscription to allow the zoom function
  */
  sub: Subscription;
  /**
  * it point to the selected element by the click on it
  */
  selectedCell: any;

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
  * this constructor bind this class with the services use for callback function and draw the grid in the canvas
  * @param classMenuService
  * @param editService
  * @param mainEditorService
  */
  constructor(private classMenuService: ClassMenuService,
    private menuService: MenuService,
    private mainEditorService: MainEditorService,
    private activityService: ActivityService) {
      this.selectedCell = null;

      // Subscribe all'oggetto observable per la funzione di zoom e di copia
      this.sub = menuService.selectedGrapg$.subscribe(
        (x) => {
          if(x=='+')
            this.zoomIn();
          else if(x=='-')
            this.zoomOut();
          else if(x=='copied')
            this.copyElement();
          else if(x=='pasted')
            this.pasteElement();
          else if(x=='cuted')
            this.cutElement();
          else if(x=='undo')
            this.undo();
          else if(x=='redo')
            this.redo();
          else if(x=='elimina')
            this.elimina();
        }
      );
      this.mainEditorService.checkrefresh();
    }


    ngOnInit() {
      this.graph = new joint.dia.Graph;
      this.paper = new joint.dia.Paper({
        el: $("#paper"),
        width: $('#paper').width(),
        height: $('#paper').height(),
        gridSize: 10,
        model: this.graph
      });
      this.paper.drawGrid("dot");
      this.paper.scale(this.xAx,this.xAx);
      /**
      * This method allows to recognize when there is a resize of the page
      */
      window.addEventListener('resize', (event)=> {
        let height1=window.innerHeight-(window.innerHeight)/100;
        let width1= window.innerWidth-(window.innerWidth)/100
        this.paper.setDimensions(width1, height1);
      });
      /**
      * This method allows to recognize when there is a change in the graph
      */
      this.graph.on('change', ()=> {
          if(this.noChange==false||this.noChange==null){
            if(this.actualGraph!=null){
              if(this.aMethod!=null&&this.bloccaChange==true){
                this.bloccaChange= false;
                this.aMethod= null;
                let metodi = this.classMenuService.classe.attributes.methods;
                metodi.splice(metodi.findIndex(element => {
                  let met = element.split(' ');
                  this.bloccaChange= false;
                  for(let i=0; i<met.length; i++){
                    if(met[i] == this.aMethod.getNome())
                      return element;
                  }
                }),1);
                this.classMenuService.classe.set('methods',null);
                this.classMenuService.classe.set('methods',metodi);
                this.aMethod= null;
                this.bloccaChange= false;
              }
              else{
                if(this.undoGraph==null){ this.undoGraph= new joint.dia.Graph;}
                this.undoGraph.clear();
                this.actualGraph.getCells().forEach(element => {
                  this.undoGraph.addCell(element.clone());
                });
                this.actualGraph.clear();
                this.redoGraph= null;
              }
            }
            else this.actualGraph = new joint.dia.Graph;
            this.graph.getCells().forEach(element => {
              this.actualGraph.addCell(element.clone());
            });
          }
          this.flagAdded= false;
          this.flagRemoved= false;
          if(this.changeMethod==false||this.changeMethod==null){
            this.addedMethod= null;
            this.addedAttribute= null;
            this.removedAttribute= null;
            this.removedMethod= null;
            this.rMethod= null;
            this.bloccaChange= false;
          }
          this.noChange= false;
        });
      /**
      * This method allows to recognize when there is a add event in the graph
      */
      this.graph.on('add', (cell) => {
        if(this.noChange==false||this.noChange==null){
          if(this.flagAdded!=false){
            if(this.actualGraph==null) {this.actualGraph = new joint.dia.Graph;}
            if(this.undoGraph==null){ this.undoGraph= new joint.dia.Graph;}
            this.undoGraph.clear();
            this.actualGraph.getCells().forEach(element => {
              this.undoGraph.addCell(element.clone());
            });
            this.actualGraph.clear();
            this.graph.getCells().forEach(element => {
              this.actualGraph.addCell(element.clone());
            });
          }
          this.flagAdded=true;
          this.noChange= false;
        }
        this.noChange= false;
      });

      /**
      * This method allows to recognize when there is a remove event in the graph
      */
      this.graph.on('remove', (cell) => {
        if(this.noChange==null||this.noChange==false) {
          if(this.flagRemoved==true){
            if(this.actualGraph==null) {this.actualGraph = new joint.dia.Graph; }
            if(this.undoGraph==null){ this.undoGraph= new joint.dia.Graph;}
            this.undoGraph.clear();
            this.actualGraph.getCells().forEach(element => {
              this.undoGraph.addCell(element.clone());
            });
            this.actualGraph.clear();
            this.graph.getCells().forEach(element => {
              this.actualGraph.addCell(element.clone());
            });
            this.flagRemoved= false;
          }
        }
        this.noChange= false;
      });

      /**
      * This method allows to the mouse's pointer to recognize when a class is clicked and select it
      */
      this.paper.on('cell:pointerdown', (cellView) => {
        if(!this.connettore) {
          let type = cellView.model.attributes.type;
          if((type != 'uml.Generalization') &&
            (type != 'uml.Implementation') &&
          (type != 'uml.Association') &&
          (type != 'fsa.Arrow')){
            this.elementSelection(cellView);
          }
        }
        else if(!this.mainEditorService.getActivityModeStatus())
          this.selectElementsToConnect(cellView);
        else
          this.selectElementActivity(cellView);
      });
      /**
      * This method allows to the mouse's pointer to recognize when the class is unselected by click outside that shape
      */
      this.paper.on('blank:pointerdown', () => {
        if(this.selectedCell){
          this.selectedCell.unhighlight();
          this.classMenuService.closeAllCollapsedList();
        }
        this.selectedCell = null;
        this.activityService.deselectElement();
      });

      // this.mainEditorService.storeGraph(this.graph.toJSON()); // ELIMINARE
      this.mainEditorService.setEditorComp(this);
    }

    /* Salva il graph corrente utilizzando il metodo storeGraph di mainEditor service,
    pulisce this.graph e lo ripopola tramite il JSON fornito in ingresso
    */
    /**
    *  This method is used to replace the editor with a new windows with the contents in the JSON file
    *  @param graph
    */
    replaceDiagram(graph: JSON) {
      if(graph){
        if(!this.mainEditorService.getActivityModeStatus())
          this.mainEditorService.storeGraph(this.graph.toJSON());
        this.graph.clear();
        this.graph.fromJSON(graph);
      }
    }

    /**
    * This method is used to select the element to be connectted by the connector
    * @param cell
    */
    selectElementsToConnect(cell: any) {
      if(this.elementToConnect) {
        if((this.connettore.attributes.type === 'uml.Generalization')&&(this.selectedCell.model.attributes.type!='uml.Interface')) {
          this.elementSelection(cell);
          this.mainEditorService.addSuperclass(this.elementToConnect.model.attributes.name,
            cell.model.attributes.name);
          this.extendedAttributes.forEach(element => {
            this.mainEditorService.addAttributo(element.getTipo(), element.getNome(), element.getAccesso(), element.isStatic(), element.isFinal());
          });  
          this.extendedMethods.forEach(element => {
            this.mainEditorService.addMetodo(element.isStatic(), element.isConstructor(), element.getTipoRitorno(), element.getNome(), element.getAccesso(), element.getListaArgomenti())
          });
        }
        else{
          if(this.interfaceMethods!=null){
            this.elementSelection(cell);
            this.interfaceMethods.forEach(element => {
              this.classMenuService.addMetodo(element.getNome(), element.isStatic(), false, element.getTipoRitorno(), element.getAccesso(), element.getListaArgomenti());
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
        if((cell.model.attributes.type != 'uml.Interface')||((this.connettore.attributes.type === 'uml.Implementation')&&(this.interfaceMethods!=null))){
            let element1 = this.elementToConnect;
            let freccia = new this.connettore.constructor({
              source: { id: element1.model.id },
              target: { id: cell.model.id }
            });
            this.graph.addCells([freccia]);
            this.elementToConnect = this.connettore = null;
          }
          else {
            if(this.selectedCell){
              this.selectedCell.unhighlight();
              this.classMenuService.closeAllCollapsedList();
            }
            this.selectedCell = null;
            this.activityService.deselectElement();
            this.connettore= null;
            this.elementToConnect= null;
          }
        } 
        else {
          this.interfaceMethods= null;
          this.elementToConnect = cell;
          this.elementSelection(cell);
          if(this.connettore.attributes.type === 'uml.Implementation'){
            if(cell.model.attributes.type == 'uml.Interface'){
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
              this.elementToConnect= null;
              if(this.selectedCell){
                this.selectedCell.unhighlight();
                this.classMenuService.closeAllCollapsedList();
              }
              this.selectedCell = null;
              this.activityService.deselectElement();
              this.connettore= null;
              $('.freccia').blur();
            }
          }
          else if(cell.model.attributes.type == 'uml.Interface') {
            this.elementToConnect= null;
            if(this.selectedCell){
              this.selectedCell.unhighlight();
              this.classMenuService.closeAllCollapsedList();
            }
            this.selectedCell = null;
            this.activityService.deselectElement();
            this.connettore= null;
          }
          else{
            this.extendedMethods = this.classMenuService.getMetodi();
            this.extendedAttributes = this.classMenuService.getAttributi();
          }
        }
      }
      /**
      * This method add a link to the class
      * @param connettore
      */
      addConnettore(connettore: any) {
        this.connettore = connettore;
      }

      /**
      * This method select a shape in the editor
      * @param cellView
      */
      elementSelection(cellView: any) {
        if (this.selectedCell){
          this.selectedCell.unhighlight();
        }
        cellView.highlight();
        if(!this.mainEditorService.getActivityModeStatus()){
          this.selectedCell = cellView;
          this.classMenuService.classSelection(cellView.model);
          this.mainEditorService.selectClasse(cellView.model.attributes.name);
        } else {
          this.selectedCell = cellView;
          this.activityService.setSelectedElement(cellView.model);
        }
      }

      // Aggiunta classe
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
      zoomIn(){
        this.xAx+=(0.05);
        this.paper.scale(this.xAx,this.xAx);
      }

      /**
      * This method decrease the scale of the editor
      */
      zoomOut(){
        this.xAx-=(0.05);
        this.paper.scale(this.xAx,this.xAx);
      }

      /**
      * This method clone the selected element
      */
      cloneElement() {
        let clone = this.selectedCell.model.clone();
        clone.translate(80,80);
        this.graph.addCell(clone);
      }

      deleteElement(cell: any) {
        this.flagRemoved=true;
        this.graph.removeCells(cell);
        this.selectedCell = null;
      }

      /**
      * This method copy the selected element
      */
      copyElement(){
        if(this.selectedCell!=null){
          this.copiedElement= this.selectedCell;
          this.flagCut= false;
          this.countCopies= 0;
        }
      }

      /**
      * This method pastes the element copied earlier
      */
      pasteElement(){
        if(this.copiedElement!= null){
          this.elementSelection(this.copiedElement);
          if(!this.mainEditorService.getActivityModeStatus()){
            if(this.flagCut==false){
              let nome = this.selectedCell.model.getClassName();
              this.classMenuService.changeClassName(nome+'_copia'+this.countCopies);
              if(this.selectedCell.model.attributes.type=='uml.Class'){
                let nomeClasse= new Classe(this.copiedElement.model.getClassName());
                this.mainEditorService.getSelectedClasse().getMetodi().forEach(element => {
                  nomeClasse.addMetodo(element);
                });
                this.mainEditorService.getSelectedClasse().getAttributi().forEach(element => {
                  nomeClasse.addAttributo(element.getTipo(), element.getNome(), element.getAccesso(), element.isStatic(), element.isFinal());
                });
                this.mainEditorService.addClass(nomeClasse, this.copiedElement.model.clone());
              }
              if(this.selectedCell.model.attributes.type=='uml.Interface') this.mainEditorService.addClass(new Interface(this.copiedElement.model.getClassName()+'_copia'+this.countCopies), this.copiedElement.model.clone());
              if(this.selectedCell.model.attributes.type=='uml.Abstract') {
                let nomeClasse= new ClasseAstratta(this.copiedElement.model.getClassName());
                this.mainEditorService.getSelectedClasse().getMetodi().forEach(element => {
                  nomeClasse.addMetodo(element);
                });
                this.mainEditorService.getSelectedClasse().getAttributi().forEach(element => {
                  nomeClasse.addAttributo(element.getTipo(), element.getNome(), element.getAccesso(), element.isStatic(), element.isFinal());
                });
                this.mainEditorService.addClass(nomeClasse, this.copiedElement.model.clone());
              }
              this.classMenuService.changeClassName(nome);
              if(this.countCopies!=null)this.countCopies=1+this.countCopies;
              else this.countCopies=0;
            }
            else{
              if(this.selectedCell.model.attributes.type=='uml.Class') this.mainEditorService.addClass(new Classe(this.copiedElement.model.getClassName()), this.copiedElement.model.clone());
              if(this.selectedCell.model.attributes.type=='uml.Interface') this.mainEditorService.addClass(new Interface(this.copiedElement.model.getClassName()), this.copiedElement.model.clone());
              if(this.selectedCell.model.attributes.type=='uml.Abstract') this.mainEditorService.addClass(new ClasseAstratta(this.copiedElement.model.getClassName()), this.copiedElement.model.clone());
              this.flagCut=false;
              this.copiedElement= null;
            }
          }
          else {
            if(this.selectedCell.model.attributes.type=='uml.StartState') this.activityService.addStart(this.copiedElement.model.clone());
            if(this.selectedCell.model.attributes.type=='uml.EndState') this.activityService.addEnd(this.copiedElement.model.clone());
            if(this.selectedCell.model.attributes.type=='erd.Relationship'&& this.selectedCell.model.attributes.attrs.text.text=='Decision') this.activityService.addIfNode(this.copiedElement.model.clone());
            if(this.selectedCell.model.attributes.type=='basic.Rect') this.activityService.addOperation(this.copiedElement.model.clone());
            if(this.selectedCell.model.attributes.type=='erd.Relationship'&& this.selectedCell.model.attributes.attrs.text.text=='') this.activityService.addMergeNode(this.copiedElement.model.clone());
            if(this.flagCut==true)  this.copiedElement= null;
          }
        }
      }

      /**
      * This method cut the selected element
      */
      cutElement(){
        if(this.selectedCell!=null){
          this.copiedElement= this.selectedCell;
          if(!this.mainEditorService.getActivityModeStatus()) this.classMenuService.removeClass(this.selectedCell.model.getClassName(), this.selectedCell.model);
          else {
            this.deleteElement(this.selectedCell.model);
          }
          this.flagCut= true;
        }
      }

      /**
      * This method delete the selected element
      */
      elimina(){
        if(this.selectedCell!=null)
          this.deleteElement(this.selectedCell.model);
      }

      /**
      * This method undo the last change in the graph
      */
      undo(){
        this.fromUndo= true;
        if(this.undoGraph != null){
          if(this.addedAttribute!=null){
            this.puntElement= this.selectedCell;
            this.classMenuService.removeAttributo(this.addedAttribute.getNome());
            this.noChange= true;
            this.removedAttribute= this.addedAttribute;
          }else
          if(this.addedMethod!=null) {
            this.mainEditorService.removeMetodo(this.addedMethod.getNome());
            this.removedMethod= this.addedMethod;
          }else if(this.rMethod!= null) {
            this.classMenuService.parametriMetodo= this.rMethod.getListaArgomenti();
            this.aMethod= this.rMethod;
            this.elementSelection(this.classeEliminata);
            this.classMenuService.addMetodo(this.rMethod.getNome(),this.rMethod.isStatic(), this.rMethod.isConstructor(), this.rMethod.getTipoRitorno(),  this.rMethod.getAccesso());
            this.classeEliminata= null;
          }
          this.redoGraph= new joint.dia.Graph;
          if(this.rMethod==null) this.aMethod= null;
          this.graph.getCells().forEach(element => {
            this.redoGraph.addCell(element.clone());
          });
          if(this.rMethod==null){
            this.graph.getCells().forEach(element => {
              this.graph.removeCells(element);
              this.selectedCell= null;
            });
            this.undoGraph.getCells().forEach(element => {
              this.graph.addCell(element.clone());
            });
          }
          this.undoGraph.clear();
          this.undoGraph=null;
          this.actualGraph.clear();
          this.graph.getCells().forEach(element => {
            this.actualGraph.addCell(element.clone());
          });
        }
        this.changeMethod= false;
        this.noChange= false;
        this.fromUndo= false;
      }

      /**
      * This method redo the last change in the graph
      */
      redo(){
        if(this.redoGraph!=null){
          if(this.changeMethod==false)
            if(this.removedAttribute!=null){
              this.noChange= true;
              this.classMenuService.addAttributo(this.removedAttribute.getNome(),this.removedAttribute.isStatic(), this.removedAttribute.isFinal, this.removedAttribute.getTipo(), this.removedAttribute.getAccesso());
            }
            if(this.removedMethod!=null) {
            this.noChange= true;
            this.elementSelection(this.puntElement);
            this.puntElement= null;
            this.mainEditorService.addMetodo(this.removedMethod.isStatic(), this.removedMethod.isConstructor(), this.removedMethod.getTipoRitorno(), this.removedMethod.getNome(), this.removedMethod.getAccesso(),  this.removedMethod.getListaArgomenti());
          }
          else if(this.aMethod!= null) {
            this.classMenuService.removeMetodo(this.aMethod.getNome());
            this.bloccaChange= true;
          }
          this.flagAdded=false;
          if(this.undoGraph==null) this.undoGraph= new joint.dia.Graph;
          this.undoGraph.clear();
          this.actualGraph.getCells().forEach(element => {
            this.undoGraph.addCell(element.clone());
          });
          if(this.aMethod==null&&this.removedAttribute==null){
            this.graph.getCells().forEach(element => {
              this.graph.removeCells(element);
              this.selectedCell= null;
            });
            this.redoGraph.getCells().forEach(element => {
              this.graph.addCell(element.clone());
            });
          }      else {
            this.bloccaChange= false;
            this.aMethod= null;
          }
          this.redoGraph= null;
          this.actualGraph.clear();
          this.graph.getCells().forEach(element => {
            this.actualGraph.addCell(element.clone());
          });
        }
        this.removedMethod= null;
        this.removedAttribute= null;
        this.changeMethod= false;
        this.fromUndo= false;
      }

      /**
       * This function copies the newly created attribute 
       */
      copiaAttr(tipo: string, nome:string, acc: string, stat: boolean, fin: boolean){
        this.addedAttribute= new Attributo(tipo, nome, acc, stat, fin);
      }

      /**
      * This method update the actualGraph and undoGraph
      */
      setUndoRedo(){
        if(this.actualGraph!=null){
          if(this.undoGraph==null){ this.undoGraph= new joint.dia.Graph;}
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
        this.flagAdded= false;
        this.flagRemoved= false;
      }
      /**
      * This method resets the state of the tasks in "Modifica"
      */
      resetModifica(){
        this.actualGraph= null;
        this.undoGraph= null;
        this.redoGraph= null;
        this.copiedElement= null;
      }


      selectElementActivity(cell: any) {
        if(this.elementToConnect) {
          let element1 = this.elementToConnect;
          let freccia = new this.connettore.constructor({
            source: { id: element1.model.id },
            target: { id: cell.model.id }
          });
          this.graph.addCells([freccia]);
          this.elementToConnect.unhighlight();
          this.elementToConnect = this.connettore = null;
          this.activityService.setConnector([element1.model.id,cell.model.id]);
        } else {
          this.elementToConnect = cell;
          cell.highlight();
        }
      }
    }
