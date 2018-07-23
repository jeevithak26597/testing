import { TestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { Http, HttpModule } from '@angular/http';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        // declarations: [ModeldrivenLoginComponent],
      providers: [WeatherService]
    });
  });
  let service:WeatherService;
  let httpService:Http;
  beforeEach(() => { 
    service = new WeatherService(httpService);
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});