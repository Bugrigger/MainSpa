import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filialCompany } from '../model/filial';
import { filialCreateAction } from '../store/filial/filial.actions';
import { filialState } from '../store/filial/filial.reducer';
import { filialListSelector } from '../store/filial/selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store$: Store<filialState>) { }



  filialList = [];
  filialList$: Observable<filialCompany[]> = this.store$.pipe(select(filialListSelector));

  ngOnInit() {
  }

  createFilial(filial: {}) {
    console.log(filial);
    // console.log(filialPhone);
    // console.log(administrator);
    this.store$.dispatch(new filialCreateAction({ filial }));
  }

}
