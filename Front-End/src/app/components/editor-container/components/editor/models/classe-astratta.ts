import { Classe } from './classe';

/**
* This class rappresent the abstrac methods
* @param nome method name
*   @param tipo method type
*   @param acc method accessibility
*  *@param listaParam method parameter list
*/
class MetodiAstratti{
  constructor(public nome: string,
    public tipo: string,
    public acc: string,
    public listaParam: string[]){}
  }

  /**
  * it extends Classe and it's used to create an abstract class
  */
  export class ClasseAstratta extends Classe {

    /**
    * an array that contin the class'methds
    */
    abstractMethods = new Array<MetodiAstratti>();

    constructor(nome: string) {
      super(nome);
    }

    /**
    * This methos add to the class, an abstract methods
    * @param nome
    * @param tipo
    * @param acc
    * @param listaParam
    */
    addAbstractMethods(nome: string, tipo: string, acc:string, listaParam: string[]) {
      this.abstractMethods.push(new MetodiAstratti(nome,tipo,acc,listaParam));
    }

    /**
    * Returns true if the object is an abstract, else return false
    */
    isAbstarct(){
      return true;
    }

    /**
    * This method parse the selected class and transform it into a JSON format
    */
    toJSON() {
      let classe = '{"name":"'+super.getNome()+'","attributes":'+
      JSON.stringify(super.getAttributi)+',"methods":'+
      JSON.stringify(super.getMetodi)+',"abstract-methods":'+
      JSON.stringify(this.abstractMethods)+'}';
    }
  }
