import { NgModule } from '@angular/core';
import { AngularWeatherAnyDegreeComponent } from './angular-weather-any-degree.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularWeatherAnyDegreeService } from './angular-weather-any-degree.service';



@NgModule({
  declarations: [
    AngularWeatherAnyDegreeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AngularWeatherAnyDegreeComponent
  ],
  providers: [AngularWeatherAnyDegreeService]
})
export class AngularWeatherAnyDegreeModule { }
