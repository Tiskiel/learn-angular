import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  number : number = 0;
  fontSize : number = 16;
  green : string = 'green';
  red : string = 'red';
  color : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    this.number +=1;
    this.fontSize += 1;
    this.checkColor();
    this.check()

  }

  soustraction() {
    this.number -=1;
    this.fontSize -= 1;
    this.checkColor();
    this.check();

  }

  check() { 

    if(this.fontSize < 8) this.fontSize = 8;
    if(this.fontSize > 32) this.fontSize = 32;

  }

  reset() {

    this.fontSize = 8;
    this.number = 0;

  }

  checkColor() {

    if(this.number < 0) this.color = this.red;
    if(this.number > 0) this.color = this.green;
    if(this.number === 0) this.color = 'black';

  }



}
