import { Component } from '@angular/core';
import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-add-main-method',
  templateUrl: './class-add-main-method.component.html',
  styleUrls: ['./class-add-main-method.component.css']
})
export class ClassAddMainMethodComponent {

  /**
  * @param classMenuService used to create a new instantiation of ClassMenuService
  */
  constructor(private classMenuService: ClassMenuService) 
  { }

 addMain() {
    this.classMenuService.addMain();
  }

}
