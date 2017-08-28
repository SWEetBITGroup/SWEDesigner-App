import { Classe } from './classe';
import { Metodo } from './metodo';
import { Attributo } from './attributo';

// class MetodiAstratti{
//     constructor(public nome: string,
//                 public tipo: string,
//                 public listaParam: string[]){}
// }
export class Interface extends Classe {

	// abstractMethods = new Array<MetodiAstratti>();
	constructor(nome: string) {
		super(nome);
		super.setTipo('interface');
	}

	// addAbstractMethods(nome: string, tipo: string, listaParam: string[]) {
	//     this.abstractMethods.push(new MetodiAstratti(nome,tipo,listaParam));
	// }


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
		throw new Error('InterfacciaNoAttributi');
	}


	/**
	 * Adds a new method for this Java class
	 * @param metodo it takes a pre-built method and adds it into the array of methods
	 */
	addMetodo(metodo: Metodo) {
		super.getMetodi().forEach(met => {
			if (met.getNome() == metodo.getNome())
				throw new Error('NomePresente');
		});
		if (metodo.isStatic()) throw Error('InterfacciaNoMetodoStatico')
		else super.addMetodo(metodo);
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
		throw Error('InterfacciaNoAttributi')
	}

	/**
	 * Removes an attribute from the array of attributes if the given name matches
	 * @param nomeAttr the name of the attribute to remove
	 */
	removeAttr(nomeAttr: string) {
		throw Error('InterfacciaNoAttributi')

	}
	/**
	 * This method return if is an interface
	 */
	isInterface() {
		return true;
	}

	codeMetodiInt() {
		let meths = '';
		super.getMetodi().forEach(meth => {
			meths += meth.getAccesso() + ' ';
			if (meth.isStatic())
				meths += 'static ';
			meths += meth.getTipoRitorno() + ' ' + meth.getNome() + '( ' + meth.codeParams() + ');/n';
		});
		return meths;
	}

	toCode() {
		let code: string;
		code = 'interface ' + this.getNome() + '{\n';
		code += this.codeMetodiInt() + '\n}\n';
		return code;
	}
}
