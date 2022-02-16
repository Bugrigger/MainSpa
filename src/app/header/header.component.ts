import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routing: Router) { }

  ngOnInit() {
  }

  isAuth() {
    console.log("Авторизация успешна");
    this.routing.navigate(['/'])
  }

  onClick() {
    localStorage.removeItem('admin');
    localStorage.removeItem('auth');
    this.isAuth();
  }

  userSstatus = localStorage.getItem('admin');

}
