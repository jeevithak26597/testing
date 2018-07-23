import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { WeatherService } from '../../weather.service';
import { Http } from '@angular/http';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports:[Ng2GoogleChartsModule],
      providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let service:WeatherService;
  let httpService:Http;
  beforeEach(() => { 
    service = new WeatherService(httpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
