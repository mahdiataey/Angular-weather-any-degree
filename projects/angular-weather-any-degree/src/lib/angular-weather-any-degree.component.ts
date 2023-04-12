import { Component, Input } from '@angular/core';
import { AngularWeatherAnyDegreeService } from './angular-weather-any-degree.service';

@Component({
  selector: 'mal-angular-weather-any-degree',
  // template: `
  //   <p>
  //     angular-weather-any-degree works!
  //   </p>
  // `,
  templateUrl: './angular-weather-any-degree.component.html',
  styleUrls: ['./angular-weather-any-degree.component.scss']
})
export class AngularWeatherAnyDegreeComponent {
  @Input() Units: string | undefined;
  @Input() unitSymbol: string | undefined;
  @Input() APIKEY: any;
  @Input() height: string = 'auto';
  @Input() width: string = '425px';
  @Input() backgroundColor: string = 'rgb(10 10 111)';
  @Input() isBoxShadow: boolean = true;
  @Input() borderRadius: string = '5px';
  @Input() locationFontSize: string = '40px';
  @Input() locationFontColor: string = '#fff';
  @Input() status: boolean = true;
  @Input() statusFontColor: string = '#fff';
  @Input() statusFontSize: String = '18px';
  @Input() temperature: Boolean = true;
  @Input() tempratureFontColor: string = '#fff';
  @Input() tempratureFontSize: string = '80px';
  @Input() weatherImages: boolean = true;
  @Input() weatherImageWidth: string = '100px';
  @Input() weatherImageHeight: string = '100px';
  @Input() geoLocation: boolean = false;
  @Input() location: any = '';
  @Input() isWind: boolean = true;
  @Input() isHumidity: boolean = true;
  @Input() windFontColor: string = '#fff';
  @Input() windFontSize: string = '20px';
  @Input() humidityFontColor: string = '#fff';
  @Input() humidityFontSize: string = '20px';
  isLoading: boolean = true;
  weatherDetails = {
    location : '',
    weather_descriptions: '',
    temperature: '',
    icon: '',
    wind_speed: '',
    humidity: ''
  };
  constructor(public ws: AngularWeatherAnyDegreeService) { }

  ngOnInit() {
    this.checkLocation();
  }

  /**
   *@description Check whether geolocation or manually added location.
   */

  checkLocation() {
    if (this.geoLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          this.location = `lat=${lat}&lon=${long}`;
          this.getWeather(true);
        }, (error) => {
          console.warn(error.message);
        });
      } else {
        console.warn(`It seems like Geolocation, which is required for this page, is not enabled in your browser.
        Please use a browser which supports it.`);
      }
    } else if (!this.geoLocation && this.location.length < 1) {
      console.warn('Provide  a valid location');
    } else {
      this.getWeather(false);
    }
  }

  getWeather(isGeoLocation: boolean) {
    if (this.APIKEY) {
      this.ws.getWeatherDetails(isGeoLocation,this.location, this.APIKEY,this.Units).subscribe(response => {
        this.weatherDetails = {
          location : response.name,
          weather_descriptions: response.weather[0].description,
          temperature: response.main.temp,
          icon: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
          wind_speed: response.wind.speed,
          humidity: response.main.humidity
        };
        this.isLoading = false;
      }, err => {
        console.warn(err.error.error.message);
      })
    } else {
      console.warn('Invalid APIKEY');
    }
  }

}
