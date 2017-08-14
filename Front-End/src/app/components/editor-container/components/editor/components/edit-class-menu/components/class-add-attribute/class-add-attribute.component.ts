import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
import { MainEditorService } from '../../../../../../../../services/main-editor.service';
import { ActivityService } from '../../../../services/activity.service'
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../../../../models/classe';

@Component({
  selector: 'app-class-add-attribute',
  templateUrl: './class-add-attribute.component.html',
  styleUrls: ['./class-add-attribute.component.css']
})
export class ClassAddAttributeComponent implements OnDestroy {
  /**
  * The current selected class in the class diagram of the EditorComponent
  */
  classe: any;
  /**
  * The name of the current selected class in the class diagram of the EditorComponent
  */
  name: String = '';
  /**
  * Subscription to the osservable object which is the selected class in the editor
  */
  sub: Subscription; // Subscription all'ossevable di tipo elemento-classe selezionato dal grafico

  /**
  * Array of primitive data types
  */
  types = ['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String'];
  /**
  * Array of visibility
  */
  accessoAttr = ['public', 'protected', 'private'];
  /**
  * Used to store the selected type for the constructor of a new attribute.
  */
  selectedTipoAtt: string;
  /**
  * Used to store the selected visibility to build a new attribute
  */
  selectedAccAtt: string = 'public';

  @ViewChild('staticAtt') checkStaticAtt: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('finalAtt') checkFinalAtt: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('checkStaticAttMod') checkStaticAttMod: ElementRef;
  /**
  * Used to point to a HTML checkbox element
  */
  @ViewChild('checkFinalAttMod') checkFinalAttMod: ElementRef;

  /**
  * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
  * by subscription from classMenuService
  * @param classMenuService used to create a new instantiation of ClassMenuService
  * @param mainEditorService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService,
    private mainEditorService: MainEditorService,
    private activityService: ActivityService) {
      this.sub = classMenuService.selectedClass$.subscribe(
        (x) => {
          this.classe = x;
          this.name = x.getClassName();
        }
      );
    }

    /**
    * Used to unsubscribe from the observable to prevent memory leak
    */
    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    /**
    * Retrives information from the template HTML of this component to build
    * a new attribute. If one or more parameter isn't present an error will be shown
    * @param nome the neme of the new attribute
    */
    addAttributo(nome: string, staticAtt: boolean, finalAtt: boolean, tipo: string, acc: string) {
      if (nome && tipo && acc) {
        try {
          this.mainEditorService.addAttributo(tipo, nome, acc, staticAtt);
        } catch (error) {
          if( error.message == 'NomePresente' ) {
            alert( 'Non è possibile inserire due attributi con lo stesso nome' );
            return;
          }
        }
        let attributi = this.classe.attributes.attributes;
        let vis;
        // switch per assegnare il giusto simbolo alla visibilità di un attributo
        switch (acc) {
          case 'public':
          vis = '+';
          break;
          case 'protected':
          vis = '#';
          break;
          case 'private':
          vis = '-';
        }
        let stat = '';
        let final = '';
        if ( staticAtt ) {
          stat = 'static';
          attributi.push(vis + ' ' + stat + ' ' + nome + ' : ' + tipo);
        } else if ( finalAtt ) {
          final = 'final';
          attributi.push(vis + ' ' + final + ' ' + nome + ' : ' + tipo);
        }
        else {
          attributi.push(vis+' '+nome+' : '+ tipo);
        }
        this.classe.set('attributes',null); // Hack per far funzionare l'event change:attrs
        this.classe.set('attributes',attributi);
        // Reset dei campi
        this.selectedAccAtt = 'public';
        this.selectedTipoAtt = null;
        $('#nomeAttributo').val('');
        $('#finalAtt').prop('checked', false);
        $('#staticAtt').prop('checked', false);
      } else {
        alert('Alcuni capi del form per la creazione del nuovo attributo non sono stati compilati');
      }
    }
    /**
    * This function allows to be check only one element on the attribute checkbox
    * @param event name of id element
    */
    updateCheckbox(event: any) {
      if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'staticAtt')
        this.checkFinalAtt.nativeElement.checked = false;
      if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'finalAtt')
        this.checkStaticAtt.nativeElement.checked = false;
    }
    /**
    * This function closes all the collapsed div except the selected one
    * @param event name of element reference
    */
    closeCollapsedList(event:any) {
      if (!$(event).hasClass("listaAttr")) {
        if ($('#listaAttr').attr("aria-expanded"))
          $('#listaAttr').removeClass("in");
      }
    }
    /**
    * This funcion closes all the collapsed div
    */
    closeCollapsedAllList () {
      if ($('#listaAttr').attr("aria-expanded"))
        $('#listaAttr').removeClass("in");
      if ($('#addAttr').attr("aria-expanded"))
        $('#addAttr').removeClass("in");
    }
  }


