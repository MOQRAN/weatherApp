import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherData: any;
  cityName: string = '';
  errorMessage: string = '';

  constructor(private weatherService: WeatherService, private geolocation: Geolocation) {}

  getWeatherByCity() {
    this.weatherService.getWeatherByCity(this.cityName).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'City not found. Please try again.';
      }
    );
  }

  getWeatherByLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const lat = resp.coords.latitude;
      const lon = resp.coords.longitude;

      this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Could not fetch weather data. Please try again.';
        }
      );
    }).catch((error) => {
      this.errorMessage = 'Geolocation not available.';
    });
  }

  ngOnInit() {
    this.getWeatherByLocation();
  }
}
