import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filialCompany } from '../model/filial';
import { filialState } from '../store/filial/filial.reducer';

@Component({
  selector: 'app-renderFilial',
  templateUrl: './renderFilial.component.html',
  styleUrls: ['./renderFilial.component.css']
})
export class RenderFilialComponent implements OnInit {

  @Input()
  filialList: filialCompany[] = [
    // {
    //   id: 1,
    //   filialAddress: 'Мира 26',
    //   filialPhone: '+7(963)214-56-31',
    //   administrator: 'Гайдулян И.О'
    // },
    // {
    //   id: 2,
    //   filialAddress: 'Заречная 14',
    //   filialPhone: '+7(912)569-10-52',
    //   administrator: 'Вивикова Г.Ф'
    // }
  ];

  constructor(private store$: Store) { }

  ngOnInit() {
  }



}
