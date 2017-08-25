import { Component } from '@angular/core';

import { MainEditorService } from '../../../../../../services/main-editor.service';
import { ActivityService } from '../../services/activity.service';

@Component({
	selector: 'activity-menu',
	templateUrl: './activity-menu.component.html',
	styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent {

	decisions = ['if', 'for', 'while'];
	dec: string = '';
	params: string[];

	operators = ['<', '<=', '>', '>=', '==', '!='];
	types = ['short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String'];

	modPro: boolean = false;
	mod: string = 'Scrivi Corpo';


	// Valori dichiarazione variabile
	nomeVar: string = '';
	tipoVar: string = '';
	valVar: string = '';

	// Valori if
	va: string = '';
	operando: string = '';
	
	// Valori for & while
	nomeInd: string = '';
	valInd: number = 0;
	maxInd: number = 0;
	op: string = '';

	constructor(private mainEditorService: MainEditorService,
		private activityService: ActivityService) { }

	enterClassMode() {
		this.activityService.salvaMetodo();
	}

	generaCodice() {
		this.activityService.generaCodice();
	}

	changeName(name: string) {
		this.activityService.changeName(name);
		$('#newName').val('');
	}

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

	generaFor() {
		if (!this.modPro) {
			this.valInd = parseInt(this.valInd.toFixed(0));
			this.maxInd = parseInt(this.maxInd.toFixed(0));
			this.nomeInd.trim();
			let re = new RegExp('^[0-9]+| +');
			if (re.test(this.nomeInd))
				alert("Il nome dell'indice non può contenere spazi o iniziare con un numero");
			else if (this.nomeInd && this.valInd && this.maxInd)
				var code = 'int ' + this.nomeInd + ' = ' + this.valInd + '; ' + this.nomeInd + ' ' + this.op +
			 		' ' + this.maxInd +'; ' + this.nomeInd + '++';
		} else 
			var code = this.nomeInd;
		this.activityService.setDecisione('for', code);
		this.nomeInd = this.op = '';
		this.valInd = this.maxInd = 0;
	}

	setNomeVar(name: string) {
		this.nomeVar = name;
	}

	declareVar() {
		this.valVar = this.valVar.trim();
		this.nomeVar = this.nomeVar.trim();
		if (this.nomeVar && this.tipoVar) {
			let re = new RegExp('^[0-9]+| +');
			if (re.test(this.nomeVar))
				alert('Il nome della variabile non può iniziare con un numero o contenere spazi al suo interno');
			else {
				if (this.valVar)
					var code = this.tipoVar + ' ' + this.nomeVar + ' = ' + this.valVar;
				else
					var code = this.tipoVar + ' ' + this.nomeVar;
			}
		}
		else
			alert('Tipo o/e nome della variabile assente/i');
		this.activityService.modBody(code, true);
		this.activityService.addLocalVar(this.activityService.getSelectedShapeId(), this.nomeVar);
		this.tipoVar = '';
		this.valVar = '';
		this.nomeVar = '';
	}

	deleteVar(id: string) {
		if (id) {
			this.activityService.deleteVar(id);
		}
	}

	toggleModPro() {
		if (this.modPro) {
			this.mod = 'Modalità Libera';
			this.modPro = false;
		} else {
			this.mod = 'Modalità Guidata';
			this.modPro = true;
		}
	}

	modificaIf() {
		if (!this.modPro)
			var code = this.va + ' ' + this.op + ' ' + this.operando;
		else
			var code = this.va;
		this.activityService.modBody(code, false);
		this.va = this.operando = this.op = '';
	}

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
			console.log('modificato');
		}
	}

}
