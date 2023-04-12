import { TestBed } from '@angular/core/testing';

import { AngularWeatherAnyDegreeService } from './angular-weather-any-degree.service';

describe('AngularWeatherAnyDegreeService', () => {
  let service: AngularWeatherAnyDegreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWeatherAnyDegreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
