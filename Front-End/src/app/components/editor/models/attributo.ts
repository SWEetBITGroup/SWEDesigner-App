import { Param } from './param';

export class Attributo extends Param {
    private visibility: string;
    private staticAtt: boolean;

    constructor (tipo: string, nome: string, acc: string, sta?: boolean) {
        super(tipo,nome);
        this.visibility = acc;
        this.staticAtt = sta;
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
}
