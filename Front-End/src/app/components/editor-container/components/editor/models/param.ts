/**
 * it rappresents the a method's parameter
 */
export class Param {
    /**
     * it's the parameter's type
     */
    private type: string;
    /**
     * it's the parameter's name
     */
    private name: string;

    /**
     * Use to model a method class it contains the parameter definition.
     * @param tipo
     * @param nome
     */
    constructor(tipo: string, nome: string) {
        this.type = tipo;
        this.name = nome;
    }

    /**
     * it returns the parameter's type
     */
    getTipo() {
        return this.type;
    }

    /**
     * it returns the parameter's name
     */
    getNome() {
        return this.name;
    }

    /**
     * it change the parameter's type
     * @param tipo
     */
    changeTipo(tipo: string) {
        this.type = tipo;
    }

    /**
     * it change the parameter's name
     * @param nome
     */
    changeNome(nome: string) {
        this.name = nome;
    }

    toString() {
        return this.type + ' ' + this.name;
    }
}
