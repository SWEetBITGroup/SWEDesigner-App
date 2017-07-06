import { Param } from './param';

import * as joint from 'jointjs';

  /**
   * it define the class's method
   */
export class Metodo {
    /**
     * it define the method's name
     */
    nome: string;
    /**
     * it define the method's visibility
     */
    accesso: string;
    /**
     * it define the method's return type
     */
    tipoRitorno: string;
    /**
     * it define the list of formal parameters by an array
     */
    listaArgomenti: Param[];
    /**
     * it define the current method into JSON format
     */
    diagramma: JSON;

    /**
     * it make a Metodo object, listaArg is optional
     * @param nome
     * @param acc
     * @param tipo
     * @param listaArg
     */
    constructor(nome: string, acc: string, tipo: string, listaArg?: Param[]) {
        this.nome = nome;
        this.accesso = acc;
        this.tipoRitorno = tipo;
        this.diagramma = (new joint.dia.Graph).toJSON();
        if (listaArg)
          this.listaArgomenti = listaArg;
    }

    /**
     * it change the method's name
     * @param nome
     */
    changeNome(name: string) {
        this.nome = name;
    }

    /**
     * it change the method's return type
     * @param tipo
     */
    changeTipoRitorno(tipo: string) {
        this.tipoRitorno = tipo;
    }

    /**
     * it change the method's visibility
     * @param acc
     */
    changeAccesso(acc: string) {
        this.accesso = acc;
    }

    /**
     * it change the reference of the formal paremeters array
     * @param listaArg
     */
    changeListaArg(listArg: Param[]) {
        this.listaArgomenti = listArg;
    }

    /**
     * it append to listaArgomenti a new parameter
     * @param arg
     */
    addArgomento(arg: Param) {
        if(!this.listaArgomenti)
            this.listaArgomenti = new Array<Param>();
        this.listaArgomenti.push(arg);
    }

    /**
     * it assigns to diagramma attributes class, the JSON file
     * @param dia
     */
    addDiagram(dia: JSON) {
        this.diagramma = dia;
    }

    /**
     * it returns the method's diagramma
     */
    getDiagram() {
        return this.diagramma;
    }

    /**
     * it returns the method's nome
     */
    getNome() {
        return this.nome;
    }

    /**
     * it returns the method's visibility
     */
    getAccesso() {
        return this.accesso;
    }

    /**
     * it returns the method's return type
     */
    getTipoRitorno() {
        return this.tipoRitorno;
    }

    /**
     * it returns the method's parameters list
     */
    getListaArgomenti() {
        return this.listaArgomenti;
    }

    // toJSON() {
    //     let metodo = '{"name":"'+this.nome+'","arguments":['+
    //                  this.listaArgomenti.forEach((arg, index) => {
    //                      let argomento = JSON.stringify(arg);
    //                      if(index != this.listaArgomenti.length-1) argomento += ',';
    //                      return argomento;
    //                  })+'],"graph":"'+this.diagramma.toJSON()
    //     return metodo;
    // }
}
