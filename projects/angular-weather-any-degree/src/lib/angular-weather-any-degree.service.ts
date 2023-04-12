import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from './config';

@Injectable({
  providedIn: 'root'
})
export class AngularWeatherAnyDegreeService {

  constructor(public http: HttpClient) { }

  getWeatherDetails(isGeoLocation: any, location: any, APIKEY: any,Units: any) : Observable <any> {
    if(isGeoLocation){
      return this.http.get(`${API}${location}&units=${Units}&appid=${APIKEY}`);
    }else{
      return this.http.get(`${API}q=${location}&units=imperial&appid=${APIKEY}`);
    }
  }
}
