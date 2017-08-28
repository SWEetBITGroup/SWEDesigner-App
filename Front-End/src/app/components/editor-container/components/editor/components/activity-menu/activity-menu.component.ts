import { Component } from '@angular/core';

import { MainEditorService } from '../../../../../../services/main-editor.service';
import { ActivityService } from '../../services/activity.service';

/**
* This component manage the activity shapes
*/
@Component({
	selector: 'activity-menu',
	templateUrl: './activity-menu.component.html',
	styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent {
  /**
  * This value rappresent the type of decision
  */
  decisions = ['if', 'for', 'while'];
  /**
  * This value rappresent decision taken
  */
  dec: string = '';
  /**
  * This value rappresent the parameter list
  */
	params: string[];
  /**
  * This value rappresent the operation list
  */
  operators = ['<', '<=', '>', '>=', '==', '!='];
  /**
  * This value rappresent the type list
  */
	types = ['short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String'];
  /**
  * This value rappresent the mode of make the body
  */
  modPro: boolean = false;
  /**
  * This is a string used to assign to a buttom in html DOM
  */
	mod: string = 'Cambia Modalità';

  // Valori dichiarazione variabile
  /**
  * This value rappresent the varaible name
  */
  nomeVar: string = '';
  /**
  * This value rappresent the varaible type
  */
  tipoVar: string = '';
  /**
  * This value rappresent the varaible value
  */
	valVar: any = '';

  // Valori if
  /**
  * This value rappresent the varaible name of if statement
  */
  va: string = '';
  /**
  * This value rappresent the operation into if statement
  */
	operando: string = '';

  // Valori for & while
  /**
  * This value rappresent the varaible name of for loop
  */
  nomeInd: string = '';
  /**
  * This value rappresent the varaible index of for loop
  */
  valInd: number = 0;
  /**
  * This value rappresent the varaible max index of for loop
  */
  maxInd: number = 0;
  /**
  * This value rappresent the varaible operation of for loop
  */
	op: string = '';
  /**
  * Make an instance of ActivityMenuComponent
  * @param mainEditorService used to create a new instantiation of MainEditorService
  * @param activityService used to create a new instantiation of ActivityService
  */
	constructor(private mainEditorService: MainEditorService,
		private activityService: ActivityService) { }
    /**
    * This function switch to class mode
    */
    enterClassMode() {
      this.activityService.salvaMetodo();
    }
    /**
    * This function generate code
    */
    generaCodice() {
      this.activityService.generaCodice();
    }
    /**
    * This function change the name with the new value
    * @param name the new value
    */
    changeName(name: string) {
      this.activityService.changeName(name);
      $('#newName').val('');
    }
    /**
    * This function check if this method is the main
    */
    isMain() {
      if (this.activityService.getNameMethod() == 'main')
        return true;
      return false;
    }
    /**
    * This function generate the operation code
    * @param corpo string code
    */
    generaOp(corpo: string) {
      corpo = corpo.trim();
      this.activityService.addBody(corpo);
    }
    /**
    * This function generate the if statement
    */
    generaIf() {
      if (!this.modPro) {
        // let re = new RegExp('^[0-9]+| +');
        // this.nomeInd.trim();
        var code = this.va + ' ' + this.op + ' ' + this.operando;
      } else {
        var code = this.va;
      }
      this.activityService.setDecisione('if', code);
      this.va = this.operando = this.op = '';
    }
    /**
    * This function generate the for loop
    */
    generaFor() {
      if (!this.modPro) {
        this.valInd = parseInt(this.valInd.toFixed(0));
        this.maxInd = parseInt(this.maxInd.toFixed(0));
        this.nomeInd.trim();
        let re = new RegExp('^[0-9]+| +');
        if (re.test(this.nomeInd))
          alert("Il nome dell'indice non può contenere spazi o iniziare con un numero");
        else if (this.nomeInd !== null && this.valInd !== null && this.maxInd !== null)
          var code = 'int ' + this.nomeInd + ' = ' + this.valInd + '; ' + this.nomeInd + ' ' + this.op + 
          ' ' + this.maxInd + '; ' + this.nomeInd + '++';
      } else
			  var code = this.nomeInd;
      this.activityService.setDecisione('for', code);
      this.nomeInd = this.op = '';
      this.valInd = this.maxInd = 0;
    }
    /**
    * This function generate the while loop
    */
    generaWhile() {
      if (!this.modPro) {
        var code = this.va + ' ' + this.op + ' ' + this.operando;
      } else {
        var code = this.va;
      }
      this.activityService.setDecisione('while', code);
      this.va = this.operando = this.op = '';
    }
    /**
    * This function change the variable name with the new value
    * @param name new value
    */
    setNomeVar(name: string) {
      this.nomeVar = name;
    }
    /**
    * This function check if the string is numeric
    */
    isNumeric() {
      if (this.tipoVar != 'String' && this.tipoVar != 'char' && this.tipoVar != 'boolean')
        return true;
      return false;
    }
    /**
    * This function make the variable
    */
    confezionaVar() {
      switch (this.tipoVar) {
        case 'int':
				this.valVar.toFixed();
				break;
        case 'short':
				this.valVar.toFixed();
				if (this.valVar > 32767) {
					this.valVar = 32767;
					alert('Valore massimo del tipo short superato, verrà salvato con valore 32767');
				}
				else if (this.valVar < -32768) {
					alert('Valore minimo del tipo short superato, verrà salvato con valore -32768');
					this.valVar = -32768;
				}
				break;
        case 'long':
				this.valVar.toFixed();
				break;
        case 'String':
				this.valVar = '"' + this.valVar + '"';
				break;
        case 'char':
				this.valVar = "'" + this.valVar + "'";
				break;
      }
    }
    /**
    * This function make the variable
    */
    declareVar() {
      if (!this.modPro) {
        if (typeof (this.valVar) == 'string')
          this.valVar = this.valVar.trim();
        this.nomeVar = this.nomeVar.trim();
        if (this.nomeVar && this.tipoVar) {
          let re = new RegExp('^[0-9]+| +');
          if (re.test(this.nomeVar))
            alert('Il nome della variabile non può iniziare con un numero o contenere spazi al suo interno');
          else {
            if (this.valVar) {
              this.confezionaVar();
              var code = this.tipoVar + ' ' + this.nomeVar + ' = ' + this.valVar;
            }
            else
              var code = this.tipoVar + ' ' + this.nomeVar;
          }
        }
        else
          alert('Tipo o/e nome della variabile assente/i');
      } else {
        var code = this.nomeVar;
      }
      if (code) {
        this.activityService.modBody(code, true);
        this.activityService.addLocalVar(this.activityService.getSelectedShapeId(), this.nomeVar);
        this.tipoVar = '';
        this.valVar = '';
        this.nomeVar = '';
      }
    }
    /**
    * This function delete the variable selected by id
    * @param id: id shape
    */
    deleteVar(id: string) {
      if (id) {
        this.activityService.deleteVar(id);
      }
    }
    /**
    * This funtion change the mode to edit a statement
    */
    toggleModPro() {
      if (this.modPro) {
        this.modPro = false;
      } else {
        this.modPro = true;
      }
    }
    /**
    * This function edit the if statement
    */
    modificaIf() {
      if (this.activityService.getShapeType() != 'if')
        this.generaIf();
      else {
        if (!this.modPro)
          var code = this.va + ' ' + this.op + ' ' + this.operando;
        else
          var code = this.va;
        this.activityService.modBody(code, false);
        this.va = this.operando = this.op = '';
      }
      console.log(this.activityService.getShapeType());
    }
    /**
    * This function edit the for loop
    */
    modificaFor() {
      if (this.activityService.getShapeType() != 'for')
        this.generaFor();
      else {
        if (!this.modPro) {
          this.valInd = parseInt(this.valInd.toFixed(0));
          this.maxInd = parseInt(this.maxInd.toFixed(0));
          this.nomeInd.trim();
          let re = new RegExp('^[0-9]+| +');
          if (re.test(this.nomeInd))
            alert("Il nome dell'indice non può contenere spazi o iniziare con un numero");
          else if (this.nomeInd && this.valInd && this.maxInd)
            var code = 'int ' + this.nomeInd + ' = ' + this.valInd + '; ' + this.nomeInd + ' ' + this.op + '; ' +
          this.nomeInd + '++';
        } else
				var code = this.nomeInd;
        this.activityService.modBody(code, false);
      }
      console.log(this.activityService.getShapeType());
    }
    /**
    * This function edit the while loop
    */
    modificaWhile() {
      if (this.activityService.getShapeType() != 'while')
        this.generaWhile();
      else {
        if (!this.modPro)
          var code = this.va + ' ' + this.op + ' ' + this.operando;
        else
          var code = this.va;
        this.activityService.modBody(code, false);
        this.va = this.operando = this.op = '';
      }
      console.log(this.activityService.getShapeType());
    }
    /**
    * This function return the parameter list
    */
    getParams() {
      return this.activityService.getParams();
    }
    /**
    * This function delete the selected element
    */
    deleteElement() {
      this.activityService.deleteElement();
    }
    /**
    * This function check if the element is selected
    */
    isSelected() {
      if (this.activityService.getSelectedShape() && this.activityService.getSelectedElement()) {
        return true;
      }
      return false;
    }

  }
