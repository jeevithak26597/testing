import { TestBed, async } from '@angular/core/testing';
import { FactorialComponent } from './factorial/factorial.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FactorialComponent
      ],
    }).compileComponents();
  }));
  it('should create the FactorialComponent', async(() => {
    const fixture = TestBed.createComponent(FactorialComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
