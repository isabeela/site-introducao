import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css']
})
export class NumComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getAleatorio() {
    let list: number[] = [];
    for (let i = 1; i <= 5; i++) {
      list[i] = Math.floor(Math.random() * 101);
    }
    return list;
  }
}
