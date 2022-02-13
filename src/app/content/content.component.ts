import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { adminStatus, statusSelector } from '../reducers/authState';
import { filialCreateAction } from '../store/filial/filial.actions';
import { filialState } from '../store/filial/filial.reducer';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store$: Store<filialState>) { }

  ngOnInit() {
  }

  // isAdmin = this.store.pipe(select(statusSelector));
  isAdmin = true;

  createFilial(filialAddress: string, filialPhone: string, administrator: string) {
    console.log(filialAddress);
    // console.log(filialPhone);
    // console.log(administrator);
    this.store$.dispatch(new filialCreateAction({ filialAddress, filialPhone, administrator }));
  }

}
