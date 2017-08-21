import { AccountService } from '../src/app/services/account.service';
import { MainEditorservice } from '../src/app/services/main-editor.service';
import { Global } from '../src/app/models/global';
import { Classe }     from '../src/app/components/editor-container/components/editor/models/classe';


describe('Test Model Global', () => {

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
