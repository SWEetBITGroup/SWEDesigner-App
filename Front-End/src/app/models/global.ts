import { Classe } from '../components/editor-container/components/editor/models/classe';
import { Interface } from '../components/editor-container/components/editor/models/interface';
import { Metodo } from '../components/editor-container/components/editor/models/metodo';
import { Param } from '../components/editor-container/components/editor/models/param';


/**
* It stores the data of the project and povides the methods
* to retrive it's inforations
*/
export class Global {
  /**
  * This value store the project name
  */
  private nome_progetto = 'Proj';
  /**
  * This value store the diagram strin value
  */
  private diagramma: string;
  /**
  * This value store the array's classes
  */
  private classi = new Array<Classe>();
  /**
  * This value check if the method main is already done
  */
  private main = false;
  /**
  * This function create a new class
  * @param nome the name of class
  */
  addClasse(nome: string) {
    this.classi.forEach(c => {
      if (c.getNome() == nome) throw new Error('NomePresente');
    })
    let c;
    c = new Classe(nome);
    this.classi.push(c);
  }
  /**
  * This function change the project name
  * @param titolo this value is the new project name
  */
  changeTitolo(titolo: string) {
    this.nome_progetto = titolo;
  }
  /**
  * This function reset the diagram
  * @param diagramma this i diagramma value
  */
  setDiagramma(diagramma: string) {
    this.diagramma = diagramma;
  }
  /**
  * This function change the class name
  * @param name this is the new class name
  */
  setName(name: string) {
    this.nome_progetto = name;
  }
  /**
  * This function return the diagram string
  */
  getDiagramma() {
    return this.diagramma;
  }
  /**
  * This function return the project name
  */
  getTitolo() {
    return this.nome_progetto;
  }
  /**
  * This function return the class list
  */
  public getClassi() {
    return this.classi;
  }
  /**
  * This function return the class selected by name
  * @param name this is the class name
  */
  getClasse(name: string) {
    let classe;
    this.classi.forEach(c => {
      if (c.getNome() == name)
        classe = c;
    });
    return classe;
  }
  /**
  * This function set the main variable to true
  */
  setMain() {
    this.main = true;
  }
  /**
  * This function return the main variable value
  */
  getMainStat() {
    return this.main;
  }
  /**
  * This function remove the class selected by name
  * @param name name of the class
  */
  removeClass(name: string) {
    for (let i = 0; i < this.classi.length; i++) {
      if (this.classi[i].getNome() == name)
        this.classi.splice(i, 1);
    }
  }
  /**
  * This function imports the project selected
  * @param proj project type
  */
  import(proj: any) {
    console.log(proj);
    this.setName(proj.nome_progetto);
    this.main = proj.main;
    this.setDiagramma(JSON.stringify(proj.diagramma));
    this.generateClassArray(proj.classi);
  }
  /**
  * This function generate the string of class information
  * @param classArray class array
  */
  generateClassArray(classArray) {
    classArray.forEach(classe => {
      if (classe.tipo == 'interface') {
        var i = new Interface(classe.nome);
        this.generateMethods(i, classe.metodi);
        this.classi.push(i);
      } else {
        var c = new Classe(classe.nome);
        this.generateMethods(c, classe.metodi);
        this.generateAttributes(c, classe.attributi);
        c.addSuperclass(classe.classePadre);
        c.setMain(classe.mainClass);
        if (classe.interfaces)
          classe.interfaces.forEach(i => {
            c.addInterface(i);
          });
        console.log(c);
        this.classi.push(c);
      }
      
    });
  }
  /**
  * This function generate the method string
  * @param classe class where the method is
  * @param methods method string
  */
  generateMethods(classe: Classe, methods) {
    methods.forEach(met => {
      let m = new Metodo(met.statico, met.costruttore, met.nome,
        met.accesso, met.tipoRitorno, this.generateParams(met.listaArgomenti));
      m.addDiagram(met.diagramma);
      m.addShapelist(met.shapeList);
      m.changeTipoRitorno(met.tipoRitorno);
      classe.addMetodo(m);
    });
  }
  /**
  * This function generate the parameter string
  * @param params the list of parameter in the method
  */
  generateParams(params) {
    let parametri = new Array<Param>();
    params.forEach(param => {
      parametri.push(new Param(param.name, param.type));
    });
    return parametri;
  }
  /**
  * This function generate the attribute string
  * @param classe class where the method is
  * @param attributi class'attribute
  */
  generateAttributes(classe: Classe, attributi) {
    attributi.forEach(att => {
      classe.addAttributo(att.type, att.name, att.visibility, att.staticAtt, att.finalAtt);
    });
  }
  private username: string;
  /**
  * This function trasform the project in a JSON file
  * @param usr username
  * @param projName the project name selected
  */
  toJSONx(usr: string, projName: string) {
    if (projName) {
      this.nome_progetto = projName;
    }
    this.username = usr;
    return JSON.stringify(this);
  }
  toJSONk(usr: string, projName: string){
    let proj = {
      "nome_progetto" : projName,
      "username" : usr,
      "project": JSON.stringify(this)
    }
    return JSON.stringify(proj);
  }
  /**
  * This function return all the class information
  * @param x this value refers to a class
  */
  getInfoClasse(x) {
    let info = new Array();
    x.forEach((element, i) => {
      let classe = element.toMU();
      if (i != x.length - 1) classe += ',';
      info.push(classe);
    });
    return info;
  }
  /**
  * This function help to trasform the project into a JSON file
  */
  toMU() {
    let global = '{' +
      JSON.stringify(this.getInfoClasse(this.classi))
      + '}';
    console.log(global);
    return JSON.stringify(global);
  }

  toCode() {
    let code = '';
    this.classi.forEach(cl => {
      code += cl.toCode() + '\n';
    });
    return code;
  }
}
