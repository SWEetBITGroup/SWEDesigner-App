/**
* This class rappresent a variable in a function
*/
export class Variabile {
  /**
  * This value rappresent the type of the variable
  */
  type: string;
  /**
  * This value rappresent the name of the variable
  */
  name: string;
  /**
  * This value rappresent the value of the variable
  */
  value: string;
  /**
  * Make an instance of Variabile
  * @param type type of the variable
  * @param name name of the variable
  * @param value value of the variable
  */
  constructor(type: string, name: string, value?: string) {
    this.type = type;
    this.name = name;
    this.value = value;
  }
  /**
  * This function return the 'type' value
  */
  getType() {
    return this.type;
  }
  /**
  * This function return the 'name' value
  */
  getName() {
    return this.name;
  }
  /**
  * This function return the 'value' value
  */
  getValue() {
    return this.value;
  }
  /**
  * This function change the 'type' with the new value
  * @param type variable type
  */
  setType(type: string) {
    this.type = type;
  }
  /**
  * This function change the 'name' with the new value
  * @param name variable name
  */
  setName(name: string) {
    this.name = name;
  }
  /**
  * This function change the 'value' with the new value
  * @param value variable value
  */
  setValue(value: string) {
    this.value = value;
  }
}
