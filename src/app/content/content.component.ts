import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filialCompany } from '../model/filial';
import { filialCreateAction } from '../store/filial/filial.actions';
import { filialState } from '../store/filial/filial.reducer';
import { filialListSelector } from '../store/filial/selectors';
import { mainCompanyCreateAction } from '../store/mainCompany/main-company.actions';
import { mainCompanyState } from '../store/mainCompany/main-company.reduser';
import { mainCompanyListSelector, mainCompanySelector } from '../store/mainCompany/selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store$: Store) { }

  userStatus() {
    let isAdmin = false;
    let i = localStorage.getItem('admin');
    if (i === 'true') {
      isAdmin = true;
    }
    console.log(isAdmin);

    return isAdmin;

  }

  filialList$: Observable<any> = this.store$.pipe(select(filialListSelector));

  mainCompanyList$: Observable<any> = this.store$.pipe(select(mainCompanyListSelector));

  ngOnInit() {
  }

  createFilial(filial: {}) {
    this.store$.dispatch(new filialCreateAction({ filial }));
  }

  createMainCompany(mainCompany: {}) {
    this.store$.dispatch(new mainCompanyCreateAction({ mainCompany }))
    console.log(mainCompany);

  }

}
