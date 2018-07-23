import {Component,EventEmitter,Output, OnInit} from '@angular/core';
import {FormGroup,Validators,FormBuilder} from "@angular/forms";

export class User {
constructor(public email: string,public password: string,public name: string) {
}
}

@Component({
selector: 'app-modeldriven-login',
templateUrl:'./modeldriven-login.component.html'
})

export class ModeldrivenLoginComponent implements OnInit{
@Output() loggedIn = new EventEmitter<User>();
form: FormGroup;

constructor(private fb: FormBuilder) {
}

ngOnInit() {
  this.form = this.fb.group({
    name:['',[
      Validators.required,
      Validators.pattern("[^a-zA-z]*")
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)]],
  });
}

login() {
  console.log(`Login ${this.form.value}`);
  if (this.form.valid) {
    this.loggedIn.emit(
        new User(
            this.form.value.email,
            this.form.value.password,
            this.form.value.name
        )
    );
  }
}
}
