import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css']
})
export class NumComponent implements OnInit {
  aleatorio = Math.floor(Math.random() * 101);
  aleatorio1 = Math.floor(Math.random() * 101);

  constructor() {}

  ngOnInit() {}

  getAleatorio() {
    let list: number[] = [];
    for (let i = 1; i <= 5; i++) {
      list.push(this.aleatorio, this.aleatorio1);
    }
    return list;
  }
}
