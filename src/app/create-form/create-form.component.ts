import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createFilial } from '../reducers/create-filial';

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

  filialAddress = '';
  filialPhone = '';
  administrator = '';

  createFilial() {
    console.log(this.filialAddress);
    console.log(this.filialPhone);
    console.log(this.administrator);
    this.store.dispatch(createFilial())

  }




}
