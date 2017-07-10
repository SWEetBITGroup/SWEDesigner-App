import { Component, OnInit , AfterViewInit, Input } from '@angular/core';

import { ClassMenuService } from './services/class-menu.service';
import { MenuService } from '../../services/menu.service';
import { MainEditorService } from '../../services/main-editor.service';

import { Subscription } from 'rxjs/Subscription';

import { Classe } from './models/classe';

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
   * is the type of the link shape selected
   */
  connettore: any;
  /**
   * it point to the selected element by the click on it, that will be connect by a link shape
   */
  elementToConnect: any;

  /**
   * this constructor bind this class with the services use for callback function and draw the grid in the canvas 
   * @param classMenuService
   * @param editService
   * @param mainEditorService
   */
  constructor(private classMenuService: ClassMenuService,
              private menuService: MenuService,
              private mainEditorService: MainEditorService) {
    this.selectedCell = null;

    // Subscribe all'oggetto observable per la funzione di zoom
    this.sub = menuService.selectedGrapg$.subscribe(
      (x) => {
        if(x=='+')
          this.zoomIn();
        else if(x=='-')
          this.zoomOut();
      }
    );
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

    // DA RIMUOVERE: crea una shape classe UML
    let class1 = new joint.shapes.uml.Class({
      position: { x: 120, y: 30 },
      size: { width: 300, height: 100 },
      name: ['Class1'],
      attributes: ['+ attributeOne: String'],
      methods: ['+ setAttributeOne(att: String): Void','+ getAttributeOne(): String'],
      attrs: {
            '.uml-class-name-rect': {
                fill: 'rgba(255,255,255,1)',
                stroke: 'rgba(48,8,198,0.5)',
                'stroke-width': 1.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: 'rgba(48,28,198,0.1)',
                stroke: 'rgba(48,8,198,0.5)',
                'stroke-width': 1.5
            },
            '.uml-class-name-text': {
              'font-family': 'monospace'
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle',
                'font-family': 'monospace'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle',
                'font-family': 'monospace'
            }
        }
    });
    // DA RIMUOVERE: Inserisce l'elemento classe in graph
    this.graph.addCell(class1);

    /**
     * This methods allows to the mouse's pointer to recognize when a class is clicked and select it
     */
    this.paper.on('cell:pointerdown', (cellView) => {
      if(!this.connettore)
        this.elementSelection(cellView);
    });
    // Funzione per deselezionare le classi selezionate, rimuove l'highlight
    // dall'elemento e pone a null l'oggetto selectedCell del component
    /**
     * This methods allows to the mouse's pointer to recognize when the class is unselected by click outside that shape
     */
    this.paper.on('blank:pointerdown', () => {
      if(this.selectedCell){
        this.selectedCell.unhighlight();
      }
      this.selectedCell = null;
    });

    this.paper.on('cell:pointerdown', (cellView) => {
      if(this.connettore)
        this.selectElementsToConnect(cellView);
    });

    this.mainEditorService.storeGraph(this.graph.toJSON()); // ELIMINARE
    this.mainEditorService.setEditorComp(this);

    // TODO: da eliminare solo per testing
    this.mainEditorService.addClass(new Classe('Class1'), class1);
    this.mainEditorService.getClassList()[0].addAttributo('String', 'attributeOne', 'public');
  }

  /* Salva il graph corrente utilizzando il metodo storeGraph di mainEditor service,
    pulisce this.graph e lo ripopola tramite il JSON fornito in ingresso
  */
  /**
   *  This methods is used to replace the editor with a new windows with the contents in the JSON file
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
   * This methods is used to select the element to be connectted by the connector
   * @param cell
   */
  selectElementsToConnect(cell: any) {
    if(this.elementToConnect) {
      this.mainEditorService.getClass(this.elementToConnect.attributes.name);// da finire!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      let element1 = this.elementToConnect;
      let freccia = new this.connettore.constructor({
                      source: { id: element1.model.id },
                      target: { id: cell.model.id }
                    });
      this.graph.addCells([freccia]);
      this.elementToConnect.unhighlight(null/* defaults to cellView.el */, {
        highlighter: {
          name: 'stroke',
          options: {
              width: 3,
              color: '#885500'
          }
        }
      });
      this.elementToConnect = this.connettore = null;
    } else {
      this.elementToConnect = cell;
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
  /**
   * This methods add a link to the class
   * @param connettore
   */
  addConnettore(connettore: any) {
    this.connettore = connettore;
  }

  /**
   * This methods select a shape in the editor
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
      this.mainEditorService.selectClasse(cellView.model.attributes.name[0]);
    } else {
      // TODO selezione elemento dell'activity diagram
    }
  }

  // Aggiunta classe
  /**
   * This methods add to the editor an element
   * @param element
   */
  addElement(element: any) {
    this.graph.addCell(element);
  }

  /**
   * This methods increase the scale of the editor
   */
  zoomIn(){
    this.xAx+=(0.05);
    this.paper.scale(this.xAx,this.xAx);
  }

  /**
   * This methods decrease the scale of the editor
   */
  zoomOut(){
    this.xAx-=(0.05);
    this.paper.scale(this.xAx,this.xAx);
  }

  /**
   * This methods clone the selected element
   */
  cloneElement() {
    let clone = this.selectedCell.model.clone();
    clone.translate(80,80);
    this.graph.addCell(clone);
  }

  deleteElement() {

  }

}
