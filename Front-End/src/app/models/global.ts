import { Classe } from '../components/editor/models/classe';

/**
 * It stores the data of the project and povides the methods
 * to retrive it's inforations
 */
export class Global {
  private nome_progetto = "Proj";
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

  setName(name: string) {
    this.nome_progetto = name;
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

  getClasse(name: string) {
    let classe;
    this.classi.forEach(c => {
      if(c.getNome() == name)
        classe = c;
    });
    return classe;
  }

  import(proj: any) {
    this.setName(proj.nome_project);
    this.setDiagramma(JSON.stringify(proj.project.graph));
  }

  // I campi devono ritornare come string
  toJSON(){
    let global = '{\"nome_progetto\":\"'+this.nome_progetto+
                  '\",\"project":{\"graph\":'+ JSON.stringify(this.diagramma) +
                  ',\"classi\":'+JSON.stringify(this.classi)+'}}';
    console.log(global);
    return global;
  }

}
