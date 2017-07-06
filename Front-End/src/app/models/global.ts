import { Classe } from '../components/editor/models/classe';

/**
 * It stores the data of the project and povides the methods
 * to retrive it's inforations
 */
export class Global {
  private nome_progetto = "culo";
  private diagramma: string;
  private classi = new Array<Classe>();


  addClasse(nome: string){
    this.classi.forEach(c => {
      if(c.getNome() == nome) throw new Error('NomePresente');
    })
    let c;
    c = new Classe(nome);
    this.classi.push(c);
  }

  changeTitolo(titolo: string){
    this.nome_progetto = titolo;
  }

  setDiagramma(diagramma: string){
    this.diagramma = diagramma;
  }

  getDiagramma(){
    return this.diagramma;
  }

  getTitolo(){
    return this.nome_progetto;
  }

  public getClassi(){
    return this.classi;
  }

  // I campi devono ritornare come string
  toJSON(){
    let global = '{\"nome_progetto\":\"'+this.nome_progetto+
                  '\",\"project":{\"graph\":'+ JSON.stringify(this.diagramma)+
                  ',\"classi\":'+JSON.stringify(this.classi)+'}}';
    return global;
  }

}
