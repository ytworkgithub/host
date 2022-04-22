import { Component, OnInit } from '@angular/core';
import * as Utils from 'remote/Utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor() {}

  ngOnInit(): void {
    console.log(`Utils in use sum(2, 2): ${Utils.sum(2, 2)}`);
    console.log(`Utils in use diff(2, 2): ${Utils.diff(2, 2)}`);
  }
}
