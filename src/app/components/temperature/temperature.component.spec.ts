import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponent } from './temperature.component';
import { WeatherService } from '../../weather.service';
import { HttpModule } from '@angular/http';
import { IDayTile } from '../../models/dayTile';
import { ITemperature } from '../../models/temperature';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureComponent ],
      imports:[HttpModule],
      providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    component.tempInfo=<ITemperature>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
