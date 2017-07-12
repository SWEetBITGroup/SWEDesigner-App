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
  addCommento() {
    let comm = new joint.shapes.basic.Rect({
        position: { x: 60, y: 10 },
        size: { width: 160, height: 35 },
        attrs: {
            rect: {
                fill: '#ffffff'
            },
            text: {
                text: 'prova',
                fill: '#000000',
                'font-size': 12,
            }
        }
    });
  }

  /**
   * Method add selected connector to editor if target element is selected, else the method selects the source element
   * @param cellView
   * Source or target element
   */
  addConnettore(cellView: any) {
      this.mainEditorService.addConnettore(cellView);
  }

  addStart() {
    let start = new joint.shapes.uml.StartState({
        position: { x:20  , y: 20 },
        size: { width: 30, height: 30 },
        attrs: {
            'circle': {
                fill: '#000000',
                stroke: 'none'
            }
        }
    });
  }

  addEnd() {
    let end = new joint.shapes.uml.EndState({
        position: { x:750  , y: 550 },
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
  }

  addActivityShape() {
    let prova = new joint.shapes.basic.Rect({
        size: { height: 100, width: 150 },
        attrs: {
            rect: {
                'rx': '5',
                'ry': '5',
                'stroke-width': '0',
                'ref-width': '100%',
                'ref-height': '100%',
                fill: '#797d9a'
            },
            text: {text: 'megaciao', fill: '#ffffff'}
        }
    });
    this.mainEditorService.addShape(prova);
  }

  addActivityForShape() {
    let svgFile = [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg6224" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
            '<defs id="defs6218" />',
            '<metadata id="metadata6221">',
                '<rdf:RDF>',
                '<cc:Work rdf:about="">',
                    '<dc:format>image/svg+xml</dc:format>',
                    '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
                    '<dc:title></dc:title>',
                '</cc:Work>',
                '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
                '<rect rx="35" y="60.386906" x="19.654762" height="108.1012" width="176.89285" id="rect6232" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:5;stroke-opacity:1;paint-order:markers fill stroke;stroke-miterlimit:4;stroke-dasharray:none" />',
                '<rect y="117.83927" x="93.738098" height="0.7559582" width="80.130959" id="rect6813" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<rect y="89.113091" x="134.55952" height="62.744045" width="0.75595242" id="rect6815" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<rect y="118.61549" x="172.3774" height="34.733318" width="1.4714057" id="rect6817" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5.04049921;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<rect style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5.04049921;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" id="rect6821" width="1.4714057" height="34.733318" x="93.738098" y="117.83927" />',
            '</g>',
            '</svg>'
    ].join('');

    let start = new joint.shapes.basic.Image({
    size: {
        width: 100,
        height: 100
    },
    position: {
        x: 100,
        y: 100
    },
    attrs: {
        image: {
        width: 1024,
        height: 768,
        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
        preserveAspectRatio: 'none'
        }
    }
    });
  }

  addConnector() {
      this.addConnettore(new joint.shapes.uml.Generalization);
  }

  addDecision() {
    let rombo = new joint.shapes.fsa.Arrow({
        position: { x: 300, y: 390 },
        attrs: {
            text: {
                fill: '#ffffff',
                text: 'If ()',
                'letter-spacing': 0
            },
            '.outer': {
                fill: '#797d9a',
                stroke: 'none'
            }
        }
    });
  }

  addEndDecision() {
    let romboNero = new joint.shapes.erd.Relationship({
        position: { x: 300, y: 390 },
        attrs: {
            text: {
                fill: '#ffffff',
                text: 'If ()',
                'letter-spacing': 0
            },
            '.outer': {
                fill: 'ffff',
                stroke: 'none'
            }
        }
    });
  }
}
