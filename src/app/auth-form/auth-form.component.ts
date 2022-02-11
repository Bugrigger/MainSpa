import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { adminStatus, userStatus } from '../reducers/authState';

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

  constructor(private store: Store) { }

  ngOnInit() {
  }

  isAdmin() {
    console.log('Вы вошли как администратор');
  }
  isUser() {
    console.log('Вы вошли как пользователь');
  }
  isAuth() {
    console.log("Авторизация успешна");
  }

  onSubmit() {
    if (this.login === this.admin.login && this.password === this.admin.password) {
      this.isAuth();
      if (this.admin.adminStatus) {
        this.isAdmin();
        this.store.dispatch(adminStatus());
        // localStorage.setItem('admin', 'true');
        // localStorage.setItem('auth', 'true');
      }
      this.login = this.password = '';
      return;
    }
    // -------------------------------------
    if (this.login === this.user.login && this.password === this.user.password) {
      this.isAuth();
      if (!this.user.adminStatus) {
        this.isUser();
        this.store.dispatch(userStatus());
        // localStorage.setItem('admin', 'false');
        // localStorage.setItem('auth', 'true');
      }
      this.login = this.password = '';
      return;
    } else {
      alert('Вы ввели неверные данные')
      console.log('Вы ввели неверные данные');
      this.login = this.password = '';
    }

  }

}
