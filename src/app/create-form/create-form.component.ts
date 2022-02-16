import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { statusSelector } from '../reducers/authState';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {

  }


  mainCompanyForm = false;
  secondCompanyForm = false;

  addMianCompany() {
    if (!this.mainCompanyForm) {
      this.mainCompanyForm = true
      this.secondCompanyForm = false
    } else {
      this.mainCompanyForm = false

    }
  };
  addSecondCompany() {
    if (!this.secondCompanyForm) {
      this.secondCompanyForm = true
      this.mainCompanyForm = false
    } else {
      this.secondCompanyForm = false
    }
  }

  // isAdmin = this.store.pipe(select(statusSelector));
  isAdmin = true;

  filialObj = {
    filialAddress: '',
    filialPhone: '',
    administrator: '',
  };

  mainCompanyObj = {
    fullName: '',
    shortName: '',
    inn: '',
    kpp: '',
    ceo: '',
    mainCompanyAddress: '',
    mainCompanyPhone: ''
  };

  @Output()
  filialCreate = new EventEmitter<object>();
  @Output()
  mainCompanyCreate = new EventEmitter<object>();


  createMainCompany() {
    this.mainCompanyCreate.emit(this.mainCompanyObj);

    this.mainCompanyObj = {
      fullName: '',
      shortName: '',
      inn: '',
      kpp: '',
      ceo: '',
      mainCompanyAddress: '',
      mainCompanyPhone: ''
    }

    this.mainCompanyForm = false;
  }

  createFilial() {

    this.filialCreate.emit(this.filialObj);

    this.filialObj = {
      filialAddress: '',
      filialPhone: '',
      administrator: ''
    };
    this.secondCompanyForm = false;
  }


}
