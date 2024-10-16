import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`);
  }
}
