import { Param } from './param';
import { AllShape } from './all-shape'

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

	shapeList = new AllShape();
	mapVarVisibili = new Map<string, string>();

	costruttore: boolean;
	statico: boolean;
	main = false;

	/**
  * it make a Metodo object, listaArg is optional
  * @param nome
  * @param acc
  * @param tipo
  * @param listaArg
  */
	constructor(stat: boolean, costr: boolean, nome: string, acc: string, tipo: string, listaArg?: Param[]) {
		this.statico = stat;
		this.costruttore = costr;
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
		if (!this.listaArgomenti)
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
  /**
  * This function returns the shape list on the graph
  */
	getShapeList() {
		return this.shapeList;
	}
  /**
  * This function returnd the variable list
  */
	getMapVars() {
		return this.mapVarVisibili;
	}
  /**
  * This function check if a method is an constructor
  */
	isConstructor() {
		return this.costruttore;
  }
  /**
  * This function check if an static method
  */
	isStatic() {
		return this.statico;
  }
  /**
  * This method add the static string to the method
  */
	staticString() {
		let sta = '';
		if (this.statico) {
			sta = 'static';
		}
		return sta;
  }
  /**
  * This function set the variable declaration into the method
  * @param vars variable list
  */
	setVars(vars: Map<string, string>) {
		this.mapVarVisibili = vars;
	}
  /**
  * This methos translate the pameters list into the method in string
  */
	paramToString() {
		let params = this.listaArgomenti;
		if (this.listaArgomenti) {
			var paramString: string = '';
			for (let i = 0; i < params.length; i++) {
				paramString += params[i].getNome() + ' : ' + params[i].getTipo();
				if (i != params.length - 1)
					paramString += ', ';
			}
		}
		return paramString;
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

	/* toMU() {
		let meth: string;
		if(this.accesso == 'public'){
      meth = '{\"typePU\":\"'+this.+'\", \"\, \"varPU\":\"'+this.getNome()+'\"}'
		}else{
      meth = '{\"typeP\":\"'+this.getTipo()+
      '\", \"varP\":\"'+this.getNome()+'\"}'
		}
		return meth;
	} */
}
