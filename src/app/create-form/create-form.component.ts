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

  count = false;

  onClick() {
    if (!this.count) {
      this.count = true
    } else {
      this.count = false
    }

  }

}
