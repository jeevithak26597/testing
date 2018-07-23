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

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,InputTextModule,PasswordModule,
        ButtonModule,
        CalendarModule],
      declarations: [ModeldrivenLoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ModeldrivenLoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });
it('user validity',()=>{
  let errors = {};
  let name = component.form.controls['name'];
  expect(name.valid).toBeFalsy();

  // user field is required
  errors = name.errors || {};
  expect(errors['required']).toBeTruthy();

})
  it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  // it('submitting a form emits a user', () => {
  //   expect(component.form.valid).toBeFalsy();
  //   component.form.controls['name'].setValue("jeevitha");
  //   component.form.controls['email'].setValue("test@test.com");
  //   component.form.controls['password'].setValue("123456789");
  //   expect(component.form.valid).toBeTruthy();

  //   let user: User;
  //   // Subscribe to the Observable and store the user in a local variable.
  //   component.loggedIn.subscribe((value) => user = value);

  //   // Trigger the login function
  //   component.login();

  //   // Now we can check to make sure the emitted value is correct
  //   expect(user.name).toBe("jeevitha");
  //   expect(user.email).toBe("test@test.com");
  //   expect(user.password).toBe("123456789");
  // });
})
;
