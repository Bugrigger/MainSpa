import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mainCompany } from '../model/main-company';

@Component({
  selector: 'app-renderMainCompany',
  templateUrl: './renderMainCompany.component.html',
  styleUrls: ['./renderMainCompany.component.css']
})
export class RenderMainCompanyComponent implements OnInit {

  @Input()
  mainCompanyList: mainCompany[] = [];

  constructor(private store$: Store) { }

  ngOnInit() {
  }

}
