// class MetodiAstratti{
//     constructor(public nome: string, 
//                 public tipo: string, 
//                 public listaParam: string[]){}
// }
export class Interface{
    nome: string;
    // abstractMethods = new Array<MetodiAstratti>();

    constructor(nome: string) {
        this.nome = nome;
    }

    // addAbstractMethods(nome: string, tipo: string, listaParam: string[]) {
    //     this.abstractMethods.push(new MetodiAstratti(nome,tipo,listaParam));
    // }
}