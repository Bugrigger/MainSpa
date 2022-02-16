import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filialCompany } from '../model/filial';
import { filialCreateAction } from '../store/filial/filial.actions';
import { filialState } from '../store/filial/filial.reducer';
import { filialListSelector } from '../store/filial/selectors';
import { mainCompanyCreateAction } from '../store/mainCompany/main-company.actions';
import { mainCompanyState } from '../store/mainCompany/main-company.reduser';
import { mainCompanySelector } from '../store/mainCompany/selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store$: Store) { }

  filialList$: Observable<any> = this.store$.pipe(select(filialListSelector));

  mainCompanyList$: Observable<any> = this.store$.pipe(select(mainCompanySelector));

  ngOnInit() {
  }

  createFilial(filial: {}) {
    this.store$.dispatch(new filialCreateAction({ filial }));
  }

  createMainCompany(mainCompany: {}) {
    this.store$.dispatch(new mainCompanyCreateAction({ mainCompany }))
  }

}
