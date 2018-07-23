import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTileComponent } from './day-tile.component';
import { WeatherService } from '../../weather.service';
import { HttpModule } from '@angular/http';
import { IDayTile } from '../../models/dayTile';

describe('DayTileComponent', () => {
  let component: DayTileComponent;
  let fixture: ComponentFixture<DayTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTileComponent ],
      imports:[HttpModule],
      providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTileComponent);
    component = fixture.componentInstance;
    component.dayTileInfo= <IDayTile>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
