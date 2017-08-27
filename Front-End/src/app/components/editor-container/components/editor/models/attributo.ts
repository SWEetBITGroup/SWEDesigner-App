import { Param } from './param';

/**
* This class rappresent the attribute of the class
*/
export class Attributo extends Param {
  private visibility: string;
  private staticAtt: boolean;
  private finalAtt: boolean;
  /**
  * Make an instance of Attributo
  * @param tipo attribute type
  * @param nome attribute name
  * @param acc attribute accessibility
  * @param sta attribute static flag
  * @param fin attribute final flag
  */
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
  /**
  * This method return true if the attribute is final
  */
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
  /**
  * This function convert the attribute into string for a JSON file
  */
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

  toCode() {
      let att = '';
      if (this.finalAtt)
        att += 'final ';
      att += this.visibility;
      if (this.staticAtt)
        att += ' static ';
      att += this.getTipo() + ' ';
      att += this.getNome() + ';';
      return att;
  }
}
