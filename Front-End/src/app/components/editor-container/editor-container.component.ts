import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { MainEditorService } from '../../services/main-editor.service';
import { ActivityService } from './components/editor/services/activity.service';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.css'],
  providers: [MenuService, MainEditorService, ActivityService]
})
export class EditorContainerComponent{
  selectedGraph: any;
  
  constructor(private myService: MenuService) {
    this.selectedGraph = null;
  }
  
}
