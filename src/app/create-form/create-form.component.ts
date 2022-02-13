import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

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

  @Output()
  filialAddressCreate = new EventEmitter<string>();
  filialPhoneCreate = new EventEmitter<string>();
  administratorCreate = new EventEmitter<string>();

  createFilial() {
    this.filialAddressCreate.emit(this.filialAddress);
    this.filialPhoneCreate.emit(this.filialPhone);
    this.administratorCreate.emit(this.administrator);

    this.filialAddress = this.filialPhone = this.administrator = '';
  }




}
