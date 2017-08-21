import { Component } from '@angular/core';

import { MainEditorService } from '../../../../../../services/main-editor.service';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'activity-menu',
  templateUrl: './activity-menu.component.html',
  styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent {

  decisions = ['for', 'while', 'if'];
  dec: string;
  params: string[];

  operators = ['<', '<=', '>', '>=', '==', '!='];
  types = ['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String'];

  nomeVar: string = '';
  tipoVar: string = '';
  nomeInd: string = '';
  valInd: string = '';
  maxInd: string = '';

  constructor(private mainEditorService: MainEditorService,
    private activityService: ActivityService) { }

  enterClassMode() {
    this.mainEditorService.enterClassMode(this.activityService.getSelectedMethod());
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

  generaDecisione() {
    this.activityService.setDecisione(this.dec);
    this.mainEditorService.setCode([this.nomeInd, this.valInd, this.maxInd]);
  }

  setNomeVar(name: string) {
    this.nomeVar = name;
  }

  declareVar(value: string) {
    if (this.nomeVar && this.tipoVar) {
      // let inz = this.nomeVar.charAt(0);
      let re = new RegExp('^[0-9]*^a*');
      if (re.test(this.nomeVar))
        console.log('Il nome della variabile non può iniziare con un numero');
      var code = this.tipoVar + ' ' + this.nomeVar + ' = ' + value;
    }
    else
      alert('Tipo o/e nome della variabile assente/i');
    console.log(code);
  }


}
