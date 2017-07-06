import * as joint from 'jointjs';
import * as backbone from 'backbone';

export class Action extends joint.shapes.basic.Generic {
    constructor(attributes?: any, options?: any) {
        super(attributes, options);
        this.set('markup','<g class="rotatable"><g class="scalable"><rect class="action-body"/></g><text class="action-name" /></g>');
        
    }
    defaults(): Backbone.ObjectHash {
        return joint.util.deepSupplement({
            attrs: {
                '.action-body': {
                'width': 200, 'height': 200, 'rx': 50, 'ry': 50,
                'fill': '#ffffff', 'stroke': '#bdc3c7', 'stroke-width': 3
                },
                '.action-name': {
                'ref': '.action-body', 'ref-x': .5, 'ref-y': 5, 'text-anchor': 'middle',
                'fill': '#000000', 'font-family': 'Courier New', 'font-size': 14
                }
            },
            name: 'Action'
        }, joint.shapes.basic.Circle.prototype.defaults)
    }
    initialize() {
        this.on('change:name', ()=>{this.attr('.action-name/text', this.get('name'))})
        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    }
}