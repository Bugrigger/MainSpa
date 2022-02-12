import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { adminStatus, statusSelector } from '../reducers/authState';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  // isAdmin = this.store.pipe(select(statusSelector));
  isAdmin = true;

}
