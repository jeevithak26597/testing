import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ModeldrivenLoginComponent, User} from "./modeldriven-login.component";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


describe('ModeldrivenLoginComponent', () => {

  let component: ModeldrivenLoginComponent;
  let fixture: ComponentFixture<ModeldrivenLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,InputTextModule,PasswordModule,
        ButtonModule,
        CalendarModule],
      declarations: [ModeldrivenLoginComponent]
    });
    fixture = TestBed.createComponent(ModeldrivenLoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });


  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });
it('user validity',()=>{
  let errors = {};
  let username = component.form.controls['username'];
  expect(username.valid).toBeFalsy();
  errors = username.errors || {};
  expect(errors['required']).toBeTruthy();

})
  it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });


})
;
