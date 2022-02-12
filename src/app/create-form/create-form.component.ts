import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor() { }

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

}
