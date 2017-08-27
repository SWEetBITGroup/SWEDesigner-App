import { Component, OnInit } from '@angular/core';

import { MainEditorService } from '../../../../../../services/main-editor.service';
import { Classe } from '../../models/classe'
import { ClasseAstratta } from '../../models/classe-astratta'
import { Interface } from '../../models/interface'
import { ActivityService } from '../../services/activity.service';
import { IfNode } from '../../models/if-node';
import { Operation } from '../../models/operation';
import { MergeNode } from '../../models/merge-node';
import * as joint from 'jointjs';

/**
 * This component is used to show the toolbar in the side
 */
@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})

/**
* it rappresent the model that contain the shapesthat will be draw into the editor
* @param classCouter [number] it's a counter class
* @param interCounter [number] it's a counter interface
* @param abstCounter [number] it's a counter astract class
*/
export class ToolbarComponent implements OnInit {
  /**
  * This variable cout the number of class
  */
  private classCouter: number = 0;
  /**
  * This variable cout the number of interface
  */
  private interCounter: number = 0;
  /**
  * This variable cout the number of abstract class
  */
  private abstCounter: number = 0;
  /**
  * Create an instantiation of ProfiloComponent
  * @param accountService used to create a new instantiation of AccountService
  * @param mainEditorService used to create a new instantiation of MainEditorService
  */
	constructor(private mainEditorService: MainEditorService, private activityService: ActivityService) { }

	ngOnInit() {
	}

	/**
  * Method add class to editor
  */
	addClasse() {
		let nomeClasse = 'Classe#' + this.classCouter++;
		let uml = joint.shapes.uml;
		let classe = new uml.Class({
			position: { x: 0, y: 0 },
			size: { width: 300, height: 100 },
			name: [nomeClasse],
			attributes: [''],
			methods: [''],
			attrs: {
				'.uml-class-name-rect': {
					fill: '#bccad6',
					stroke: '#667292',
					'stroke-width': 1
				},
				'.uml-class-attrs-rect, .uml-class-methods-rect': {
					fill: '#8d9db6',
					stroke: '#667292',
					'stroke-width': 1
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
		this.mainEditorService.addClass(new Classe(nomeClasse), classe);
	}
	/**
  * Method add interface to editor
  */
	addInterfaccia() {
		let nomeInterf = 'Interfaccia#' + this.interCounter++;
		let uml = joint.shapes.uml;
		let interfaccia = new uml.Interface({
			position: { x: 0, y: 120 },
			size: { width: 300, height: 100 },
			name: [nomeInterf],
			attributes: [''],
			methods: [''],
			attrs: {
				'.uml-class-name-rect': {
					fill: '#f9ccac',
					stroke: '#e0876a',
					'stroke-width': 1
				},
				'.uml-class-attrs-rect, .uml-class-methods-rect': {
					fill: '#f4a688',
					stroke: '#e0876a',
					'stroke-width': 1
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
		this.mainEditorService.addClass(new Interface(nomeInterf), interfaccia);
	}

	/**
  * Method add abstract class to editor
  */
	addAstratta() {
		let uml = joint.shapes.uml;
		let nomeClassAbst = 'ClasseAstratta#' + this.abstCounter++;
		let abstract = new uml.Abstract({
			position: { x: 0, y: 240 },
			size: { width: 300, height: 100 },
			name: [nomeClassAbst],
			attributes: [''],
			methods: [''],
			attrs: {
				'.uml-class-name-rect': {
					fill: '#cfe0e8',
					stroke: '#87bdd8',
					'stroke-width': 1
				},
				'.uml-class-attrs-rect, .uml-class-methods-rect': {
					fill: '#b7d7e8',
					stroke: '#87bdd8',
					'stroke-width': 1
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
		this.mainEditorService.addClass(new ClasseAstratta(nomeClassAbst), abstract);
	}

	/**
  * Method selects association as connector
  */
	addAssociazione() {
		this.addConnettore(new joint.shapes.uml.Association);
	}

	/**
  * Method selects implementation as connector
  */
	addImplementazione() {
		this.addConnettore(new joint.shapes.uml.Implementation);
	}
	/**
  * Method selects generalization as connector
  */
	addGeneralizzazione() {
		this.addConnettore(new joint.shapes.uml.Generalization);
	}
	/**
  * Method add comment cell to editor
  */
	addCommento() {
		let comm = new joint.shapes.basic.TextBlock({
			position: { x: 10, y: 400 },
			size: { width: 160, height: 100 },
			attrs: {
				rect: {
					fill: 'gold'
        },
        // text: {
        //   text: 'Commento'
        // }
      },
      content: "Commento"
    });
    this.mainEditorService.addShape( comm );
	}
	/**
  * Method add selected connector to editor if target element is selected, else the method selects the source element
  * @param cellView
  * Source or target element
  */
	addConnettore(cellView: any) {
		this.mainEditorService.addConnettore(cellView);
	}
	/**
  * This Method add the UML start activity element
  */
	addStart() {
		let start = new joint.shapes.uml.StartState({
			position: { x: 200, y: 20 },
			size: { width: 30, height: 30 },
			attrs: {
				'circle': {
					fill: '#000000',
					stroke: 'none'
				}
			}
		});
		this.activityService.addStart(start);
	}
	/**
  * This Method add the UML end activity element
  */
	addEnd() {
		let end = new joint.shapes.uml.EndState({
			position: { x: 750, y: 550 },
			size: { width: 30, height: 30 },
			attrs: {
				'.outer': {
					stroke: "#000000",
					'stroke-width': 3
				},
				'.inner': {
					fill: '#000000'
				}
			}
		});
		this.activityService.addEnd(end);
	}
	/**
  * This Method add the activity shape to the graph
  */
	addActivityShape() {
		let prova = new joint.shapes.basic.Rect({
			position: { x: 400, y: 400 },
			size: { height: 70, width: 150 },
			attrs: {
				rect: {
					'rx': '5',
					'ry': '5',
					'stroke-width': '0',
					'ref-width': '100%',
					'ref-height': '100%',
					fill: '#797d9a'
				},
				text: { text: 'Operation', fill: '#ffffff' }
			}
		});
		this.activityService.addOperation(prova);
	}
  /**
  * This Method add the link between the activity shape to the graph
  */
	addConnector() {
		let link = new joint.shapes.uml.Transition()
		this.mainEditorService.connetActivity(link);
	}
  /**
  * This Method add the decision activity shape to the graph
  */
	addDecision() {
		let rombo = new joint.shapes.erd.Relationship({
			position: { x: 300, y: 390 },
			attrs: {
				text: {
					fill: '#ffffff',
					text: 'Decision',
					'letter-spacing': 0
				},
				'.outer': {
					fill: '#797d9a',
					stroke: 'none'
				}
			}
		});
		this.activityService.addIfNode(rombo);
	}
  /**
  * This Method add the end decision activity shape to the graph
  */
	addEndDecision() {
		let romboNero = new joint.shapes.erd.Relationship({
			position: { x: 300, y: 390 },
			attrs: {
				text: {
					fill: '#ffffff',
					text: '',
					'letter-spacing': 0
				},
				'.outer': {
					fill: 'ffff',
					stroke: 'none'
				}
			}
		});
		this.activityService.addMergeNode(romboNero);
	}
  /**
  * This Method add the rectangle activity shape to the graph used for the variable declarations
  */
	addRettangoloAngolo() {
		let rettVar = new joint.shapes.erd.Entity({
			position: { x: 300, y: 200 },
			attrs: {
				text: {
					fill: '#ffffff',
					text: 'Variabile',
					'letter-spacing': 0
				},
				'.outer, .inner': {
					fill: '#797d9a',
					stroke: 'none'
				}
			}
		});
		this.activityService.addOperation(rettVar);
		this.activityService.setOperationType('VarDecl', rettVar.id);
  }

}
