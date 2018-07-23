import {LoginComponent, User} from './login.component';
import {AuthService} from "../auth.service";
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
describe('LoginComponent', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('a'));
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });


  it('login button hidden when the user is authenticated', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  it('Setting enabled to false disabled the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('Setting enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it('Entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = "test@example.com";
    passwordEl.nativeElement.value = "123456";
    component.loggedIn.subscribe((value) => user = value);
    submitEl.triggerEventHandler('click', null);
    expect(user.email).toBe("test@example.com");
    expect(user.password).toBe("123456");
  });
});

