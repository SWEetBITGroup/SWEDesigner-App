import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.css']
})
export class ProjListComponent implements OnInit {
  arr: string[];
  constructor() {
    this.arr = ['todo1','todo2','todo3','todo4','todo5','todo6','todo7','todo8','todo10','todo11','todo12','todo13','todo14',
  'todo15'];
  }

  ngOnInit() {
  }

}
