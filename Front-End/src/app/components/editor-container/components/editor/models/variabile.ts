export class Variabile {
    type: string;
    name: string;
    value: string;

    constructor(type: string, name: string, value?: string) {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }

    setType(type: string) {
        this.type = type;
    }
    setName(name: string) {
        this.name = name;
    }
    setValue(value: string) {
        this.value = value;
    }
}