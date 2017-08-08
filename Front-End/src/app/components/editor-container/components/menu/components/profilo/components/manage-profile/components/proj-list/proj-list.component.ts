import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.css']
})
export class ProjListComponent implements OnInit {
  arr: String[];
  constructor(private accountService: AccountService) {
    this.arr = [];
  }

  ngOnInit() {
    this.accountService.loadProjectList(this.accountService.username, (projects)=>{
      projects.forEach(element => {
        this.arr.push(element.nome_progetto);
      });
    })
  }

}
