import { Param } from './param';

export class Attributo extends Param {
    private visibility: string;

    constructor (tipo: string, nome: string, acc: string) {
        super(tipo,nome);
        this.visibility = acc;
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
    changeAccesso(acc: string) {
        this.visibility = acc;
    }
}
