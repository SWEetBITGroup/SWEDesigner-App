import { AccountService } from '../src/app/services/account.service';
import { MainEditorService } from '../src/app/services/main-editor.service';
import { Global } from '../src/app/models/global';
import { Classe }     from '../src/app/components/editor-container/components/editor/models/classe';
import { EditorComponent } from '../src/app/components/editor-container/components/editor/editor.component';
import { Metodo } from '../src/app/components/editor-container/components/editor/models/metodo';
import { ClassMenuService } from '../src/app/components/editor-container/components/editor/services/class-menu.service';
import { MenuService } from '../src/app/services/menu.service';
import { ActivityService } from '../src/app/components/editor-container/components/editor/services/activity.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


describe('TestModelGlobal', () => {

    const glb = new Global()

    glb.setName('Progetto');

    it('setGetName', () => {
        expect(glb.getTitolo() ).toBe('Progetto');
    });

    glb.setDiagramma('Diagramma');

    it('setGetDiagramma', () => {
        expect(glb.getDiagramma() ).toBe('Diagramma');
    });

    glb.addClasse('Classe1');

    it('addGetClasse', () => {
        expect((glb.getClasse('Classe1')).getNome()).toBe('Classe1');
    });


    it('removeClasse', () => {
        glb.removeClass('Classe1');
        let lung = (glb.getClassi()).length;
        expect(lung).toBe(0);
    });

});

describe('TestServicesMainEditor', () => {

    const mes = new MainEditorService()
    mes.setEditorComp(new EditorComponent(new ClassMenuService(),new MenuService(), new MainEditorService(), new ActivityService()));

    it('setGetActivityMode', () => {
      mes.setActivityMode();
      expect(mes.getActivityModeStatus()).toBe(true);
    });

    it('setGetClassMode', () => {
      mes.setClassMode();
      expect(mes.getActivityModeStatus()).toBe(false);
    });

/* problemi con toJSON()
    it('addClass', () => {
      mes.retriveGraph();
      mes.addClass(new Classe('prova'),'b');
    });
*/

});
