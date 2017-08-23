import { Component, OnInit } from '@angular/core';
import { ClassMenuService } from '../../services/class-menu.service';
@Component({
  selector: 'app-edit-class-menu',
  templateUrl: './edit-class-menu.component.html',
  styleUrls: ['./edit-class-menu.component.css']
})
export class EditClassMenuComponent implements OnInit {

  constructor(private classMenuService: ClassMenuService) { }

  ngOnInit() {
  }

}
