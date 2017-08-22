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


	// Valori dichiarazione variabile
	nomeVar: string = '';
	tipoVar: string = '';
	valVar: string = '';

	// Valori if
	va: string = '';

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

	modBody(text: string) {
		this.activityService.modBody(text);
	}

	generaCodice() {
		this.activityService.generaCodice();
	}

	changeName(name: string) {
		this.activityService.changeName(name);
	}

	generaIf() {
		let re = new RegExp('^[0-9]+| +');
		this.nomeInd.trim();
		this.activityService.setDecisione(this.dec, 'code');
	}

	generaFor() {
		this.valInd = parseInt(this.valInd.toFixed(0));
		this.maxInd = parseInt(this.maxInd.toFixed(0));
		this.nomeInd.trim();
		let re = new RegExp('^[0-9]+| +');
		if (re.test(this.nomeInd))
			alert("Il nome dell'indice non può contenere spazi o iniziare con un numero");
		else if (this.nomeInd && this.valInd && this.maxInd)
			var code = 'int ' + this.nomeInd + ' = ' + this.valInd + '; ' + this.nomeInd + ' ' + this.op + '; ' +
				this.nomeInd + '++';
		this.activityService.setDecisione(this.dec, code);
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
		this.activityService.modBody(code);
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

}
