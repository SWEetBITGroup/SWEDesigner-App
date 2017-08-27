import { Metodo } from './metodo';
import { Attributo } from './attributo';

/**
 * Use to model a Java class it contains the name of the class, an array of attributes, 
 * an array of methods, and the class exdended by this class.
 */
export class Classe {
	/**
	 * The name of the class, it's use as an identifier
	 */
	private nome: string;
	/**
	 * Array of attributes of the Java class
	 */
	private attributi = new Array<Attributo>();
	/**
	 * Array of methods of the Java class
	 */
	private metodi = new Array<Metodo>();
	/**
	 * The class extended by this class
	 */
	private classePadre: string = null;
	/**
		* The interface/es implemented by this class
		*/
	private interfaces = new Array<string>();

	/**
	 * The constructor builds a new object of type Classe and sets it's name
	 * @param nome the only parmeter used to build an object of type Classe
	 */
	constructor(nome: string) {
		this.nome = nome;
	}

	// Metodo per aggiungere un attributo all'array di attributi della classe
	/**
	 * This method adds a new attribute into the array of attributes ´this.attributi´,
	 * but first it'll controll if there is not an attribute with the same name.
	 * @param tipo type of the new attribute, it's passed as parameter to the constructor of Attributo
	 * @param nome the name of the new attribute, it's passed as parameter to the constructor of Attributo
	 * @param acc the visibility of the new attribute, it's passed as parameter to the constructor of Attributo
	 * @throws an error of type Error anche custom message 'NomePresente'
	 */
	addAttributo(tipo: string, nome: string, acc: string, stat: boolean, fin: boolean) {
		this.attributi.forEach(attr => {
			if (attr.getNome() == nome)
				throw new Error('NomePresente');
		});
		let attr;
		attr = new Attributo(tipo, nome, acc, stat, fin);
		this.attributi.push(attr);
	}

	/**
	 * Sets the name of the class which is extended by this class
	 * @param superclass the name of the superclass
	 */
	addSuperclass(superclass: string) {
		this.classePadre = superclass;
	}

	/**
	 * Adds a new method for this Java class
	 * @param metodo it takes a pre-built method and adds it into the array of methods
	 */
	addMetodo(metodo: Metodo) {
		this.metodi.forEach(met => {
			if (met.getNome() == metodo.getNome())
				throw new Error('NomePresente');
		});
		this.metodi.push(metodo);
	}

	// Metodo per cambiare il nome alla classe
	/**
	 * Change the name of the class
	 * @param name the new name of the class
	 */
	changeNome(name: string) {
		this.nome = name;
	}

	/**
	 * Modify an attribute of this class if the attribute is present in the array of attributes. 
	 * It changes only the parameter given
	 * @param nomeAttr the name of the attribute to modify
	 * @param tipo the new type for the selected attribute. This parameter is optional
	 * @param nuovoNome the new name for the selected attribute. This parameter is optional
	 * @param acc the new visibility for the selected attribute. This parameter is optional
	 */
	changeAttr(nomeAttr: string, tipo?: string, nuovoNome?: string, acc?: string) {
		let attributo;
		this.attributi.forEach(attr => {
			if (attr.getNome() == nomeAttr)
				attributo = attr;
		});
		if (attributo) {
			if (tipo)
				attributo.changeTipo(tipo);
			if (nuovoNome)
				attributo.changeNome(nuovoNome);
			if (acc)
				attributo.changeAcc(acc);
		}
	}

	/**
	 * Removes an attribute from the array of attributes if the given name matches
	 * @param nomeAttr the name of the attribute to remove
	 */
	removeAttr(nomeAttr: string) {
		let ind;
		this.attributi.forEach((attr, index) => {
			if (attr.getNome() == nomeAttr)
				ind = index;
		});
		if (ind >= 0)
			this.attributi.splice(ind, 1);
		console.log(this);
	}

	/**
	 * Removes a method from the array of method if the given name matches
	 * @param nomeMetodo the name of the method to remove
	 */
	removeMetodo(nomeMetodo: string) {
		let ind;
		this.metodi.forEach((metodo, index) => {
			if (metodo.getNome() == nomeMetodo)
				ind = index;
		});
		if (ind >= 0)
			this.metodi.splice(ind, 1);
	}

	/**
	 * Returns the name of this class
	 */
	getNome() {
		return this.nome;
	}

	/**
	 * Returns the array of attributes
	 */
	getAttributi() {
		return this.attributi;
	}

	/**
	 * Returns the array of methods
	 */
	getMetodi() {
		return this.metodi;
	}

	/**
	 * Returns a method from the array of method if the given name matches
	 * @param name the name of the method to retrive
	 * @throws an error of type Error with message 'Metodo non presente' if 
	 * the given name does not match
	 */
	retriveMethod(name: string) {
		let met: Metodo;
		met = null;
		this.metodi.forEach(metodo => {
			if (metodo.getNome() == name)
				met = metodo;
		});
		if (met == null) throw new Error('Metodo non presente')
		return met;
	}

	/**
	 * Returns the name of the superclass
	 */
	getSottoclasse() {
		return this.classePadre;
	}

	/**
	 * Returns true if the object is an interface, else return false
	 */
	isInterface() {
		return false;
	}

	/**
	 * Returns true if the object is an abstract, else return false
	 */
	isAbstract() {
		return false;
	}

	addInterface(interf: string) {
		this.interfaces.push(interf);
	}

	removeInerface(interf: string) {
		this.interfaces.splice(this.interfaces.findIndex(int => {
			return int == interf;
		}));
	}

	hasMain() {
		let x = false;
		this.metodi.forEach(element => {
			if (element.main == true)
				x = true;
		});
		return x;
	}

	/**
	 * Override of the toJSON function
	 */
	toJSON() {
		let classe = '{\"name\":\"' + this.nome + '\",\"attributes\":' +
			JSON.stringify(this.attributi) + ',\"methods\":' +
			JSON.stringify(this.metodi) + ',\"superclass\":"' +
			this.classePadre + '\"}';
		return JSON.parse(classe);
	}

	retrieveAttr(visibility: string) {
		let attr = new Array<Attributo>();
		this.attributi.forEach(element => {
			if (element.getAccesso() == visibility) {
				attr.push(element);
			}
		});
		return attr;
	}

	retrieveMeth(visibility: string) {
		let meth = new Array<Metodo>();
		this.metodi.forEach(element => {
			if (element.getAccesso() == visibility) {
				meth.push(element);
			}
		});
		return meth;
	}



	getInfoAttr(x: Attributo[]) {
		let infoAttr = new Array();
		if (x) {
			x.forEach((element, i) => {
				let attr = element.toMU();
				if (i != x.length - 1) attr += ',';
				infoAttr.push(attr);
			});
		}
		return infoAttr;
	}

	/* getInfoMeth(x: Metodo[]) {
		let infoMeth = new Array<string>();
		if (x) {
			x.forEach((element, i) => {
				let meth = element.toMU();
				if (i != x.length - 1) meth += ',';
				infoMeth.push(meth);
			});
		}
		return infoMeth;
	} */

	codeInterfaces() {
		let intrs = '';
		this.interfaces.forEach((i, index) => {
			if (index != this.interfaces.length - 1)
				intrs += i + ', ';
			else
				intrs += i;
		});
	}

	toCode() {
		let code: string;
		if (this.hasMain())
			code = 'public class ' + this.nome;
		else
			code = 'class ' + this.nome;
		if (this.classePadre)
			code += ' extends ' + this.classePadre;
		if (this.interfaces)
			code += ' implements ' + this.codeInterfaces();
		code += ' {\n';
	}

	toMU() {
		let program;
		let attListPrivate = this.retrieveAttr('private');
		let attListPublic = this.retrieveAttr('public');
		let methListPrivate = this.retrieveMeth('private');
		let methListPublic = this.retrieveMeth('public');
		let pub;
		let priv;
		if (attListPrivate.length == 0) {
			priv = false;
		}
		else {
			priv = true;
		}
		if (attListPublic.length == 0) {
			pub = false;
		}
		else {
			pub = true;
		}
		if (pub && !priv) {
			console.log(this.getInfoAttr(attListPublic));
			program = {
				name: this.nome,
				public: true,
				attrPU: this.getInfoAttr(attListPublic),
				methodsPU: [

				]
			}
		} else if (!pub && priv) {
			program = {
				name: this.nome,
				private: true,
				attrP: [
					JSON.stringify(this.getInfoAttr(attListPrivate))
				]
			}
		} else if (pub & priv) {
			program = {
				name: this.nome,
				private: true,
				attrP: [
					JSON.stringify(this.getInfoAttr(attListPrivate))
				],
				public: true,
				attrPU: [
					JSON.stringify(this.getInfoAttr(attListPublic))
				]
			}
		}
		return JSON.stringify(program);
	}
}
