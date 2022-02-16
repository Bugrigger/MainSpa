import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filialCompany } from '../model/filial';

@Component({
  selector: 'app-renderFilial',
  templateUrl: './renderFilial.component.html',
  styleUrls: ['./renderFilial.component.css']
})
export class RenderFilialComponent implements OnInit {

  @Input()
  filialList: filialCompany[] = [];

  constructor(private store$: Store) { }

  ngOnInit() {
  }



}
