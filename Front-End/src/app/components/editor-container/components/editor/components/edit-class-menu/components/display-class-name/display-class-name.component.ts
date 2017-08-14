import { Component, Input, OnDestroy} from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../../../../models/classe';

@Component({
  selector: 'app-display-class-name',
  templateUrl: './display-class-name.component.html',
  styleUrls: ['./display-class-name.component.css']
})
export class DisplayClassNameComponent implements OnDestroy {
/**
   * The current selected class in the class diagram of the EditorComponent
   */
  classe: any;
  /**
   * The name of the current selected class in the class diagram of the EditorComponent
   */
  name: string = '';
  /**
   * Subscription to the osservable object which is the selected class in the editor
   */
  sub: Subscription; // Subscription all'ossevable di tipo elemento-classe selezionato dal grafico
  
  /**
   * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
   * by subscription from classMenuService
   * @param classMenuService used to create a new instantiation of ClassMenuService
   * @param mainEditorService used to create a new instantiation of ClassMenuService
   */

  constructor(private classMenuService: ClassMenuService) {
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
    // Previene memory leak quando il componente è distrutto
    this.sub.unsubscribe();
  }

  removeClass(name: string) {
    this.classMenuService.removeClass(name, this.classe);
  }

}
