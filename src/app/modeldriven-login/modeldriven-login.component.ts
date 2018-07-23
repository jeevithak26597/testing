import {Component,EventEmitter,Output, OnInit} from '@angular/core';
import {FormGroup,Validators,FormBuilder} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
export class User {
constructor(public email: string,public password: string,public username: string,public date:Date) {
}
}

@Component({
selector: 'app-modeldriven-login',
templateUrl:'./modeldriven-login.component.html',
animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(0, 0, 0)'
    })),
    state('out', style({
      transform: 'translate3d(100%, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ])
]
})

export class ModeldrivenLoginComponent implements OnInit{

form: FormGroup;

constructor(private fb: FormBuilder) {
}

ngOnInit() {
  this.form = this.fb.group({
    username:['',[
      Validators.required,
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)]],
      date:['',[
        Validators.required,
      ]

      ]
  });
}

login() {
  console.log("login");

}
}
