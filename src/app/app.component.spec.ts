import { TestBed, async } from '@angular/core/testing';
import { FactorialComponent } from './factorial/factorial.component';
describe('FactorialComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FactorialComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FactorialComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
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
});
