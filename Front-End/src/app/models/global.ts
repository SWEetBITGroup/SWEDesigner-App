import { Classe }     from '../components/editor-container/components/editor/models/classe';
import { Metodo }     from '../components/editor-container/components/editor/models/metodo';
import { Param }      from '../components/editor-container/components/editor/models/param';


/**
 * It stores the data of the project and povides the methods
 * to retrive it's inforations
 */
export class Global {
  private nome_progetto = "Proj";
  private diagramma: string;
  private classi = new Array<Classe>();
  private main = false;


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

  setMain() {
    this.main = true;
  }
  getMainStat() {
    return this.main;
  }

  removeClass(name: string) {
    for(let i=0;i<this.classi.length;i++){
      if(this.classi[i].getNome() == name)
        this.classi.splice(i,1); 
    }
  }

  import(proj: any) {
    this.setName(proj.nome_progetto);
    this.setDiagramma(JSON.stringify(proj.project.graph));
    this.generateClassArray(proj.project.classi);
  }

  generateClassArray(classArray) {
    classArray.forEach(classe => {
      let c = new Classe(classe.name);
      this.generateMethods(c,classe.methods);
      this.generateAttributes(c,classe.attributes);
      c.addSuperclass(classe.superclass);
      this.classi.push(c);
    });
  }

  generateMethods(classe: Classe, methods) {
    methods.forEach(met => {
      let m = new Metodo(met.statico,met.costruttore,met.nome,
                         met.accesso,met.tipo,this.generateParams(met.listaArgomenti));
      m.addDiagram(met.diagramma);
      classe.addMetodo(m);
    });
  }

  generateParams(params) {
    let parametri = new Array<Param>();
    params.forEach(param => {
      parametri.push(new Param(param.name,param.type));
    });
    return parametri;
  }

  generateAttributes(classe: Classe, attributi) {
    attributi.forEach(att => {
      classe.addAttributo(att.type,att.name,att.visibility,att.staticAtt, att.finalAtt);
    });
  }

  // I campi devono ritornare come string
  toJSON(usr: String){
    let global = '{\"username\":\"'+usr+'\",\"nome_progetto\":\"'+this.nome_progetto+
                  '\",\"project":{\"graph\":'+ JSON.stringify(this.diagramma) +
                  ',\"classi\":'+JSON.stringify(this.classi)+'}}';
    //console.log(global);
    return global;
  }

  getInfoClasse(x){
    let info = new Array();
    x.forEach((element, i) => {
      let classe = element.toMU();
      if(i!= x.length-1) classe += ',';
      info.push(classe);
    });
    return info;
  }

  // I campi devono ritornare come string
  toMU(){
    let global = '{'+
    JSON.stringify(this.getInfoClasse(this.classi))
    +'}';
    console.log(global);
    return JSON.stringify(global);
  }

}
