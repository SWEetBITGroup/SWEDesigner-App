import { Shape } from "./shape";
import { AllShape } from './all-shape';

export class WhileNode extends Shape {

    _for = false;

    constructor(id: string) {
        super(id);
    }

    getType() {
        return 'WhileNode';
    }

    isFor() {
        return this._for;
    }

    setFor(s: boolean) {
        this._for = s;
    }

    toCode(sh: AllShape, code: string) {
        if (!this.getPrinted()) {
            this.setPrinted(true);
            sh.addStatement(this.getId());
            if (this.isFor())
                code += 'for( ' + this.getBody() + ' ) {\n';
            else
                code += 'while( ' + this.getBody() + ' ) {\n';
            sh.getElementById(this.getSucc()).toCode(sh, code);
        }
        else if (sh.getMerges().length) {
            let merge = sh.getMerges().pop();
            sh.getElementById(merge).toCode(sh, code);
        }
    }

}