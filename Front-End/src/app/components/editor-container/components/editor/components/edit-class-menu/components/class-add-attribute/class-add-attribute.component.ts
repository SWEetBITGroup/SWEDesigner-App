import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-class-add-attribute',
  templateUrl: './class-add-attribute.component.html',
  styleUrls: ['./class-add-attribute.component.css']
})
export class ClassAddAttributeComponent implements OnDestroy {
  /**
  * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
  * by subscription from classMenuService
  * @param classMenuService used to create a new instantiation of ClassMenuService
  * @param mainEditorService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService){}
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
      this.classMenuService.addAttributo(nome, staticAtt, finalAtt, tipo, acc);
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


