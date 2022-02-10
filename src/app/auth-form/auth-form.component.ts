import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  login = '';
  password = '';

  admin = {
    login: 'admin',
    password: '123',
    adminStatus: true
  }

  user = {
    login: 'user',
    password: '000',
    adminStatus: false
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login === this.admin.login && this.password === this.admin.password) {
      console.log("Авторизация успешна");
      if (this.admin.adminStatus) {
        console.log('Вы вошли как администратор');
        localStorage.setItem('admin', 'true');
      }
      this.login = this.password = '';
      return;
    }
    // -------------------------------------
    if (this.login === this.user.login && this.password === this.user.password) {
      console.log("Авторизация успешна");
      if (!this.user.adminStatus) {
        console.log('Вы вошли как пользователь');
        localStorage.setItem('admin', 'false')
      }
      this.login = this.password = '';
      return;
    } else {
      console.log('Вы ввели неверные данные');
      this.login = this.password = '';
    }

  }

}
