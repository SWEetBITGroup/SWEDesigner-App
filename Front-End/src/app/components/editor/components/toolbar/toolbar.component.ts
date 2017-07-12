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

  addStart() {
    let svgFile = [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
        '<defs id="defs2" />',
        '<metadata id="metadata5">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
                '<dc:format>image/svg+xml</dc:format>',
                '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
                '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
        '</metadata>',
        '<g id="layer1">',
            '<path id="path3894" d="m 97.101844,223.47134 c -13.058249,-1.69775 -28.777879,-8.47282 -39.272609,-16.92628 -11.86883,-9.56029 -22.85336,-26.2492 -26.64107,-40.47603 -9.83115,-36.92635 6.85343,-74.96661 40.44513,-92.21352 12.41101,-6.372158 23.784106,-8.721153 39.203895,-8.097159 17.95921,0.726757 31.69527,5.763239 45.50926,16.686489 14.54953,11.50486 24.51989,27.84512 28.42334,46.58253 1.93429,9.285 1.53992,26.8564 -0.78893,35.15178 -4.36456,15.54651 -11.36567,27.49188 -22.1535,37.79851 -17.58182,16.79757 -41.00903,24.57715 -64.725516,21.49368 z" style="fill:#000000;stroke-width:0.75595242" />',
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

  addEnd() {
    let svgFile = [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm"  width="210mm">',
            '<defs id="defs2">',
                '<linearGradient osb:paint="solid" id="linearGradient6207">',
                '<stop id="stop6205" offset="0" style="stop-color:#000000;stop-opacity:1;" />',
                '</linearGradient>',
                '<linearGradient osb:paint="solid" id="linearGradient6165">',
                '<stop id="stop6163" offset="0" style="stop-color:#000000;stop-opacity:1;" />',
                '</linearGradient>',
            '</defs>',
            '<metadata id="metadata5">',
                '<rdf:RDF>',
                '<cc:Work rdf:about="">',
                    '<dc:format>image/svg+xml</dc:format>',
                    '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
                    '<dc:title></dc:title>',
                '</cc:Work>',
                '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
                '<path id="path3894" d="m 97.101844,223.47134 c -13.058249,-1.69775 -28.777879,-8.47282 -39.272609,-16.92628 -11.86883,-9.56029 -22.85336,-26.2492 -26.64107,-40.47603 -9.83115,-36.92635 6.85343,-74.96661 40.44513,-92.21352 12.41101,-6.372158 23.784106,-8.721153 39.203895,-8.097159 17.95921,0.726757 31.69527,5.763239 45.50926,16.686489 14.54953,11.50486 24.51989,27.84512 28.42334,46.58253 1.93429,9.285 1.53992,26.8564 -0.78893,35.15178 -4.36456,15.54651 -11.36567,27.49188 -22.1535,37.79851 -17.58182,16.79757 -41.00903,24.57715 -64.725516,21.49368 z" style="fill:#000000;stroke-width:0.75595242;fill-opacity:1;stroke:none;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<ellipse ry="70.303574" rx="66.901787" cy="145.05357" cx="107.72321" id="path6212" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<ellipse ry="57.452377" rx="56.69643" cy="145.05356" cx="107.34524" id="path6214" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
            '</g>',
        '</svg>'
    ].join('');

    let end = new joint.shapes.basic.Image({
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

  addActivityShape() {
    let svgFile = [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="210mm" height="297mm" viewBox="0 0 210 297" version="1.1" id="svg6224" inkscape:version="0.92.1 r15371" sodipodi:docname="Rettangolo.svg">',
            '<defs id="defs6218" />',
            '<sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.35" inkscape:cx="-78.571429" inkscape:cy="560" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" inkscape:window-width="1366" inkscape:window-height="706" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" />',
            '<metadata id="metadata6221">',
                '<rdf:RDF>',
                '<cc:Work rdf:about="">',
                    '<dc:format>image/svg+xml</dc:format>',
                    '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
                    '<dc:title></dc:title>',
                '</cc:Work>',
                '</rdf:RDF>',
            '</metadata>',
            '<g inkscape:label="Livello 1" inkscape:groupmode="layer" id="layer1">',
                '<rect style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:5;stroke-opacity:1;paint-order:markers fill stroke;stroke-miterlimit:4;stroke-dasharray:none" id="rect6232" width="176.89285" height="108.1012" x="19.654762" y="60.386906" rx="35" />',
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
                '<path transform="matrix(0.41042479,0,0,0.54956003,82.390625,50.23306)" d="m 123.22024,91.380948 41.59991,23.607282 41.59991,23.60729 -41.24446,24.22293 -41.24447,24.22294 -0.35544,-47.83022 z" id="path6226" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
                '<rect y="125.80936" x="24.190477" height="3.1800721" width="109.40167" id="rect6228" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.20907216;stroke-opacity:1;paint-order:markers fill stroke" />',
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

  addDecision() {
    let svgFile = [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
        '<defs id="defs2" />',
        '<metadata id="metadata5">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
                '<dc:format>image/svg+xml</dc:format>',
                '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
                '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
        '</metadata>',
        '<g id="layer1">',
            '<path transform="matrix(1.0498677,0,0,1.059157,-0.3736905,-2.5737459)" d="M 11.339291,132.20237 98.273817,46.779759 183.69643,133.71428 96.761904,219.1369 Z" id="path26" style="fill:#d45500;fill-opacity:0.00956938;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
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

  addEndDecision() {}
}
