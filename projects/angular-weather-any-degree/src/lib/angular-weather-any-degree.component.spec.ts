import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWeatherAnyDegreeComponent } from './angular-weather-any-degree.component';

describe('AngularWeatherAnyDegreeComponent', () => {
  let component: AngularWeatherAnyDegreeComponent;
  let fixture: ComponentFixture<AngularWeatherAnyDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWeatherAnyDegreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWeatherAnyDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
