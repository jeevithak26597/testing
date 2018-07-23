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
  f=1;  
  str="Given number is negative number";
  fact(num:number):number|string
  {
    console.log(num);

    if(num==0)
    {
      alert("Factorial of a given number "+this.f);
    return this.f;
    }
   else if (num > 0) {
      this.f = this.f * num;
      this.fact(num - 1);
      alert("Factorial of a given number "+this.f);
      return this.f; 
  }
  else{
    
     alert(this.str);
     return this.str;
  }
   
  
//  }
 }
}
