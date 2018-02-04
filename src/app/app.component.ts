import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  items: Observable<any[]>;

  constructor() {}

  ngOnInit() {
    // this.items = this.db.collection('items').valueChanges();
  }
}
