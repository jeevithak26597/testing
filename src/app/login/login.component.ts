import {Component, Output, Input, EventEmitter} from '@angular/core';
import {AuthService} from "../auth.service";

export class User {
  constructor(public email: string, public password: string) {
  }
}
@Component({
  selector: 'app-login',
  template: `
  <form>
  <div class="form">
  <label>Email</label>
  <input type="email"
         #email>
         </div>
         <br/>
         <br/>
  <label>Password</label>
  <input type="password"
         #password><br/><br/>
         <div class="formbtn">
  <button type="button"
          (click)="login(email.value, password.value)"
          [disabled]="!enabled">Login
  </button>
  </div>
</form>
`,
styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email, password) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
  constructor(private auth: AuthService) {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}