# Angular Weather Any Degree

![alt text](https://user-images.githubusercontent.com/36917283/231538911-3b203515-bf8c-467d-a8bd-ba2624a2cb09.PNG)


Angular Weather any degree package  for web applications . Easy and Highly customisable.



<!-- [Demos / Examples](link). -->

## Getting Started


### Installation
- The angular Weather for any degree package is published on the [npm](https://www.npmjs.com/package/angular-weather-any-degree) Registry. 
- Install the package :
    `npm install angular-weather-any-degree --save`

- Once installed import `AngularWeatherAnyDegreeModule` from the installed package into your module as follows:


### Usage
Import `AngularWeatherAnyDegreeModule` into `NgModule` in `app.module.ts`. Angular's `HttpClientModule` and `CommonModule` is also required.
```js
import { AngularWeatherAnyDegreeModule } from 'angular-weather-any-degree';

@NgModule({
  // ...
  imports: [
    AngularWeatherAnyDegreeModule,
    HttpClientModule,
    CommonModule
  ]
  // ...
})
```

- We are using "openweathermap" api to get weather details so [SIGNUP](https://home.openweathermap.org/users/sign_in) and genereate api key for your project.

Add the following component tag in you template (no properties)
```html
 <mal-angular-weather-any-degree class="weather" [Units]="'metric'" [unitSymbol]="'C'"
    [APIKEY]="'your api key'">
  </mal-angular-weather-any-degree>


```

Full properties
```html
 <mal-angular-weather-any-degree class="weather" [Units]="'metric'" [unitSymbol]="'C'"
    [APIKEY]="'your api key'" [width]="'380px'" [height]="'355px'" [isBoxShadow]="false"
    [borderRadius]="'0px'" [backgroundColor]="'transparent'" [locationFontSize]="'35px'" [locationFontColor]="'#20a8d8'"
    [status]="true" [statusFontColor]="'#20a8d8'" [statusFontSize]="'18px'" [temperature]="true"
    [tempratureFontColor]="'#20a8d8'" [tempratureFontSize]="'65px'" [weatherImages]="true" [weatherImageWidth]="'110px'"
    [weatherImageHeight]="'110px'" [geoLocation]="true" [location]="''" [isWind]="true" [windFontColor]="'#20a8d8'"
    [windFontSize]="'17px'" [humidityFontColor]="'#20a8d8'" [humidityFontSize]="'17px'">
  </mal-angular-weather-any-degree>

```


### Properties
The following list of properties are supported by the component.

| Property         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
|Units	|string	|Kalvin,Imperial(Farenhite), Celcious|
|UnitSymbol	|string	|K-->Kalvin, F-->Farenhite, C-->Cilcious|
| APIKEY | String | API key from APIUX | APIKEY |
| width | String | Width of the weather card  | 280px |
| height | String | Height of the weather card | auto |
| backgroundColor | String | Background color of the weather card | #2a2828 |
| isBoxShadow | Boolean | Box shadow of the weather card | true |
| borderRadius | String | Border-radius of the weather card | 5px |
| locationFontSize | String | Font size of the location text | 40px |
| locationFontColor | String | Color of the location text | #fff |
| status | Boolean | Current weather status | true |
| statusFontSize | String | Font size of the location text | 18px |
| statusFontColor | String |  Color of the status text | #fff |
| temperature | Boolean | Temperature of the location | true |
| tempratureFontSize | String | Font size of the temperature text | 80px |
| tempratureFontColor | String |  Color of the temperature text | #fff |
| weatherImages | Boolean | Weather icon | true |
| weatherImageWidth | String | Weather icon width | 100px |
| weatherImageHeight | String | Weather icon height | 100px |
| geoLocation | Boolean | Access/Show weather of the user's location | true |
| location | String | Show one specific location's weather | '' |
| isWind | Boolean | Wind of the location | true |
| windFontSize | String | Font size of the wind text | 20px |
| windFontColor | String |  Color of the wind text | #fff |
| humidityFontColor | String | Font size of the humidity text | 20px |
| humidityFontSize | String |  Color of the humidity text | #fff |



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License
MIT License.
