# Weather App in Ionic

This is a dynamic and responsive Weather App built with **Ionic** and **Angular**. The app fetches real-time weather data using the **OpenWeather API** and uses the device's geolocation to get the current weather of the user's location. It also includes a dark mode theme, animations, and modern styling.

## Features

- **Real-time Weather**: Fetches current weather conditions for any city.
- **Geolocation**: Automatically detects and fetches weather data based on the user's location.
- **Dark Mode Compatibility**: Supports both light and dark mode themes, adapting dynamically.
- **Animations**: Smooth animations for transitions and loading states.
- **Responsive Design**: Fully responsive and optimized for mobile devices.
- **Error Handling**: Displays messages for invalid city names or other API-related errors.

## Screenshots

### Light Mode

![Light Mode Screenshot](./screenshots/light-mode.png)

### Dark Mode

![Dark Mode Screenshot](./screenshots/dark-mode.png)

## How to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/MOQRAN/weatherApp.git
   cd weather-app-ionic

2. Install the dependencies:

```bash
  npm install
```
3. Add your OpenWeather API Key:
  - Go to OpenWeather and sign up for an API key.
  - In the `src/environments/environment.ts` file, replace `your_api_key_here` with your OpenWeather API key.

```typescript

    export const environment = {
      production: false,
      weatherApiKey: 'your_api_key_here'
    };
```
4. Run the app:

```bash

  ionic serve
```
5. To run the app on a real device, make sure to install the Ionic CLI and use:

```bash

    ionic cordova run android --device
```
## Usage
  - Enter any city name to fetch the weather data.
  - Alternatively, click the "Get Current Location" button to retrieve weather data based on your location.
  - The app will automatically switch to dark mode if your system is in dark mode.

## Technologies Used

  - Ionic Framework: For the mobile-optimized UI and cross-platform capabilities.
  - Angular: To manage the app logic and HTTP requests.
  - OpenWeather API: Provides the real-time weather data.
  - Geolocation Plugin: To get the user's current location.
  - CSS Variables: For seamless dark mode support.

## Enhancements

  - Dark mode support with automatic theme switching.
  - Smooth animations for transitions and loading.
  - Error handling for incorrect city names and network issues.
  - Responsive design for all screen sizes.
