import { Component } from '@angular/core';

import { MenuService } from './services/menu.service';
import { MainEditorService } from './services/main-editor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService, MainEditorService]
})
export class AppComponent {
    selectedGraph: any;

    constructor(private myService: MenuService) {
      this.selectedGraph = null;
    }   

}
