import { Component } from '@angular/core';

import { MenuService } from './services/menu.service';
import { MainEditorService } from './services/main-editor.service';
import { ActivityService } from './components/editor/services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService, MainEditorService, ActivityService]
})
export class AppComponent {
    selectedGraph: any;

    constructor(private myService: MenuService) {
      this.selectedGraph = null;
    }

}
