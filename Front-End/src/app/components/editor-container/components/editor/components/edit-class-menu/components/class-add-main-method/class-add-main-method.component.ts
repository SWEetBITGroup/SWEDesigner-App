import { Component } from '@angular/core';
import { ClassMenuService } from '../../../../services/class-menu.service';
import { Param } from '../../../../models/param';

/**
 * This component add the main methos into selected class
 */
@Component({
  selector: 'app-class-add-main-method',
  templateUrl: './class-add-main-method.component.html',
  styleUrls: ['./class-add-main-method.component.css']
})
export class ClassAddMainMethodComponent {

  /**
  * Create an instantiation of ClassAddMainMethodComponent
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService) {}

  /**
  * This function add the main function to the target class
  */
  addMain() {
    this.classMenuService.isThereAMain = true;
    this.classMenuService.parametriMetodo.push( new Param ('string[]', 'args') );
    this.classMenuService.addMetodo('main', true, false, 'void', 'public', this.classMenuService.parametriMetodo);
  }

}
