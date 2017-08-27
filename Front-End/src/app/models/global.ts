import { Classe }     from '../components/editor-container/components/editor/models/classe';
import { Metodo }     from '../components/editor-container/components/editor/models/metodo';
import { Param }      from '../components/editor-container/components/editor/models/param';


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
  addClasse(nome: string){
    this.classi.forEach(c => {
      if(c.getNome() == nome) throw new Error('NomePresente');
    })
    let c;
    c = new Classe(nome);
    this.classi.push(c);
  }
  /**
  * This function change the project name
  * @param titolo this value is the new project name
  */
  changeTitolo(titolo: string){
    this.nome_progetto = titolo;
  }
  /**
  * This function reset the diagram
  * @param diagramma this i diagramma value
  */
  setDiagramma(diagramma: string){
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
  getDiagramma(){
    return this.diagramma;
  }
  /**
  * This function return the project name
  */
  getTitolo(){
    return this.nome_progetto;
  }
  /**
  * This function return the class list
  */
  public getClassi(){
    return this.classi;
  }
  /**
  * This function return the class selected by name
  * @param name this is the class name
  */
  getClasse(name: string) {
    let classe;
    this.classi.forEach(c => {
      if(c.getNome() == name)
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
    for(let i=0;i<this.classi.length;i++){
      if(this.classi[i].getNome() == name)
        this.classi.splice(i,1);
    }
  }
  /**
  * This function imports the project selected
  * @param proj project type
  */
  import(proj: any) {
    this.setName(proj.nome_progetto);
    this.setDiagramma(JSON.stringify(proj.project.graph));
    this.generateClassArray(proj.project.classi);
  }
  /**
  * This function generate the string of class information
  * @param classArray class array
  */
  generateClassArray(classArray) {
    classArray.forEach(classe => {
      let c = new Classe(classe.name);
      this.generateMethods(c,classe.methods);
      this.generateAttributes(c,classe.attributes);
      c.addSuperclass(classe.superclass);
      this.classi.push(c);
    });
  }
  /**
  * This function generate the method string
  * @param classe class where the method is
  * @param methods method string
  */
  generateMethods(classe: Classe, methods) {
    methods.forEach(met => {
      let m = new Metodo(met.statico,met.costruttore,met.nome,
        met.accesso,met.tipo,this.generateParams(met.listaArgomenti));
        m.addDiagram(met.diagramma);
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
        parametri.push(new Param(param.name,param.type));
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
        classe.addAttributo(att.type,att.name,att.visibility,att.staticAtt, att.finalAtt);
      });
    }
    /**
    * This function trasform the project in a JSON file
    * @param usr username
    * @param projName the project name selected
    */
    toJSON(usr: String, projName: string){
      if (projName) {
        this.nome_progetto = projName;
      }
      let global = '{\"username\":\"'+usr+'\",\"nome_progetto\":\"'+this.nome_progetto+
      '\",\"project\":{\"graph\":'+ JSON.stringify(this.diagramma) +
      ',\"classi\":'+JSON.stringify(this.classi)+'}}';
      return global;
    }
    /**
    * This function return all the class information
    * @param x this value refers to a class
    */
    getInfoClasse(x){
      let info = new Array();
      x.forEach((element, i) => {
        let classe = element.toMU();
        if(i!= x.length-1) classe += ',';
        info.push(classe);
      });
      return info;
    }
    /**
    * This function help to trasform the project into a JSON file
    */
    toMU(){
      let global = '{'+
      JSON.stringify(this.getInfoClasse(this.classi))
      +'}';
      console.log(global);
      return JSON.stringify(global);
    }
  }
