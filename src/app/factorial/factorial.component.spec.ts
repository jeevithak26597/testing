import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FactorialComponent } from './factorial.component';

describe('FactorialComponent', () => {
  let component: FactorialComponent;
  let fixture: ComponentFixture<FactorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Factorial of a given number'`, async(() => {
    const fixture = TestBed.createComponent(FactorialComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Factorial of a given number');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(FactorialComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Find the factorial of a given number');
  }));
  it('should return factorial if the number is greater than 0',()=>{
  component.fact(5);
  expect(component.f).toBe(120);
  });
  it('should return factorial equal to 1 if the number is 0',()=>{
    component.fact(0);
    expect(component.f).toBe(1);
    });
  it('should return factorial if the number is less than 0',()=>{
      component.fact(-1);
      expect(component.str).toBe("Given number is negative number");
      });
});
