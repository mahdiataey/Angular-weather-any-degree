import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-weather-widget',
  templateUrl: './m-weather-widget.component.html',
  styleUrls: ['./m-weather-widget.component.css']
})
export class MWeatherWidgetComponent implements OnInit {

  WeatherData:any;
  public location:string | undefined;
  isLoading: boolean = true;
  public lat: any;
  public lng: any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getLocation();
    // this.getWeatherData();
    console.log('weather data',this.WeatherData);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log('this.lat',this.lat);
          console.log('this.lng',this.lng);
          this.location = `lat=${this.lat}&lon=${this.lng}`;
          console.log('this.lng',this.location);

          this.getWeatherData();
          console.log('this.getWeatherData()',this.getWeatherData());
          this.isLoading=false;
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getWeatherData(){
    console.log('in get weather data',this.location)
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=herat&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    fetch(`https://api.openweathermap.org/data/2.5/weather?${this.location}&appid=1568bef71072826d2f22289e0b47f1ba`)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
// console.log('consoled api url',`https://api.openweathermap.org/data/2.5/weather?${this.location}&appid=1568bef71072826d2f22289e0b47f1ba`)
    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }
icon: any;
  setWeatherData(data: { weather: { icon: any; }[]; }){
    console.log('data',data)
    this.icon=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
