import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  name : string = 'Hello Wolrd';
  isActive : boolean = true;

  redColor = 'red';
  blueColor = 'blue';
  yellowColor = 'yellow';
  blackColor = 'black';
  color : string = 'black';
  fontStyle : string = '';
  weightFont : string = '';
  fontSize : number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive() {

    this.isActive = !this.isActive;

  }

  
  isItDisable() {
    
    this.isActive = !this.isActive;
    
  }
  
  putColor(color : string) {

    this.color = color;
    this.isItDisable();

  }

  changeStyle(style : string) {

    this.fontStyle === style ? this.fontStyle = '' : this.fontStyle = style;

  }

  changeWeight(weight : string) {

    this.weightFont === weight ? this.weightFont = '' : this.weightFont = weight;

  }

  changeSize(size : number) {

    this.fontSize === size ? this.fontSize = 16 : this.fontSize = 50;

  }
  

}
