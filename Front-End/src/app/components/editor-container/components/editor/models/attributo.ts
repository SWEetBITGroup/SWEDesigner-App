import { Param } from './param';

export class Attributo extends Param {
    private visibility: string;
    private staticAtt: boolean;
    private finalAtt: boolean;

    constructor (tipo: string, nome: string, acc: string, sta: boolean, fin: boolean) {
        super(tipo,nome);
        this.visibility = acc;
        this.staticAtt = sta;
        this.finalAtt= fin;
    }

    /**
     * This method return true if the attribute is static
     */
    isStatic() {
        return this.staticAtt;
    }

    isFinal() {
        return this.finalAtt;
    }

    /**
     * This method return the attribute's visibility
     */
    getAccesso() {
        return this.visibility;
    }

    /**
     * This method return the attribute's visibility
     */
    changeAcc(acc: string) {
        this.visibility = acc;
    }

    toMU(){
        let attr: string;
        if(this.visibility == "public"){
            attr = '{\"typePU\":\"'+this.getTipo()+
                    '\", \"varPU\":\"'+this.getNome()+'\"}';
        }else{
            attr = '{\"typeP\":\"'+this.getTipo()+
            '\", \"varP\":\"'+this.getNome()+'\"}';
        }
        return attr;
    }
}
