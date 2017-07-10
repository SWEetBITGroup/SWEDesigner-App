import { Component, OnInit } from '@angular/core';

import { MainEditorService } from '../../../../services/main-editor.service';
import { Classe } from '../../models/classe'
import { ClasseAstratta } from '../../models/classe-astratta'
import { Interface } from '../../models/interface'
import * as joint from 'jointjs';

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

  private classCouter: number = 0;
  private interCounter: number = 0;
  private abstCounter: number = 0;
  constructor(private mainEditorService: MainEditorService) { }

  ngOnInit() {
  }

  /**
   * Method add class to editor
   */
  addClasse() {
    let nomeClasse = 'Classe #'+this.classCouter++;
    let uml = joint.shapes.uml;
    let classe = new uml.Class({
      position: { x: 300, y: 300 },
      size: { width: 300, height: 100 },
      name: [nomeClasse],
      attributes: [''],
      methods: [''],
      attrs: {
            '.uml-class-name-rect': {
                fill: 'rgba(255,255,255,1)',
                stroke: 'rgba(48,28,198,1)',
                'stroke-width': 1.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: 'rgba(48,28,198,0.1)',
                stroke: 'rgba(48,8,198,1)',
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
    this.mainEditorService.addClass(new Classe(nomeClasse), classe);
  }

  /**
   * Method add interface to editor
   */
  addInterfaccia() {
    let nomeInterf = 'Interfaccia #'+this.interCounter++;
    let uml = joint.shapes.uml;
    let interfaccia = new uml.Interface({
      position: { x: 50, y: 30 },
      size: { width: 300, height: 100 },
      name: [nomeInterf],
      attributes: [''],
      methods: [''],
      attrs: {
            '.uml-class-name-rect': {
                fill: 'rgba(48,28,198,0.1)',
                stroke: 'rgba(48,8,198,1)',
                'stroke-width': 1.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: 'rgba(48,28,198,0.1)',
                stroke: 'rgba(48,8,198,1)',
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
    // this.mainEditorService.addClass(new Interface(nomeInterf), interfaccia);
  }

  /**
   * Method add abstract class to editor
   */
  addAstratta() {
    let uml = joint.shapes.uml;
    let nomeClassAbst = 'Classe Astratta #'+this.abstCounter++;
    let abstract = new uml.Abstract({
      position: { x: 400, y: 400 },
      size: { width: 300, height: 100 },
      name: [nomeClassAbst],
      attributes: [''],
      methods: [''],
      attrs: {
            '.uml-class-name-rect': {
                fill: 'rgba(30,30,30,0.1)',
                stroke: 'rgba(15,15,15,1)',
                'stroke-width': 1.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: 'rgba(30,30,30,0.1)',
                stroke: 'rgba(15,15,15,1)',
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
  addCommento() {}

  /**
   * Method add selected connector to editor if target element is selected, else the method selects the source element
   * @param cellView
   * Source or target element
   */
  addConnettore(cellView: any) {
      this.mainEditorService.addConnettore(cellView);
  }

}
