import { Component } from '@angular/core';

import { EditServiceService } from './services/edit-service.service';
import { MainEditorService } from './services/main-editor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EditServiceService, MainEditorService]
})
export class AppComponent {
    selectedGrapg: any;

    constructor(private myService: EditServiceService) {
      this.selectedGrapg = null;
    }   

}
