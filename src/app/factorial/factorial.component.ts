import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {
  title='Factorial of a given number';
  constructor() { }

  ngOnInit() {
  }
  fact(num:number)
  {
    console.log(num);
  var f=1;
  if(num<0)
  {
     alert("Given number is negative number"+f);
  }
  else
  {
  for(var i=1;i<=num;i++)
  {
  var f=f*i;
  }
  alert("Factorial of a given number "+f);
 }
 }
}
