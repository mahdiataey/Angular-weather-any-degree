import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularWeatherAnyDegreeModule } from 'angular-weather-any-degree';
// import { AngularWeatherAnyDegreeModule } from 'angular-weather-any-degree';
// import { AngularWeatherLibModule } from 'angular-weather-lib';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // AngularWeatherLibModule
    AngularWeatherAnyDegreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
