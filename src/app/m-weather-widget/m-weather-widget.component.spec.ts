import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MWeatherWidgetComponent } from './m-weather-widget.component';

describe('MWeatherWidgetComponent', () => {
  let component: MWeatherWidgetComponent;
  let fixture: ComponentFixture<MWeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MWeatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
