import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpwComponent } from './tpw.component';
import { WeatherService } from '../../weather.service';
import { HttpModule } from '@angular/http';
import { Itpw } from '../../models/tpw';

describe('TpwComponent', () => {
  let component: TpwComponent;
  let fixture: ComponentFixture<TpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpwComponent ],
      imports:[HttpModule],
      providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpwComponent);
    component = fixture.componentInstance;
    component.tpwInfo=<Itpw>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
