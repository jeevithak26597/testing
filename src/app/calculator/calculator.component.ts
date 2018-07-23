import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber:number=10;
  secondNumber:number=20;
  result : number = 0;
  constructor() { }
  public additionOfTwoNumbers():number{
    this.result = this.firstNumber+this.secondNumber;
    return this.result;
}
public subtractionOfTwoNumbers():number{
    this.result = this.firstNumber-this.secondNumber;
    return this.result;
}
public multiplicationOfTwoNumbers():number{
    this.result = this.firstNumber*this.secondNumber;
    return this.result;
}
public divisionOfTwoNumbers():number{
  this.result = this.firstNumber/this.secondNumber;
  return this.result;
}
  ngOnInit() {
  }

}

