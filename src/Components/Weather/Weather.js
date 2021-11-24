// * React * //
import React, { useEffect, useState } from 'react';
// * Template * //
import {
  WeatherBox,
  WeatherContent,
  WeatherTitle,
  WeatherData,
  WeatherTemperature,
} from './WeatherTemplate';
// * Api * //
import { getWeather } from '../../api/api';
// * Weather * //
import { WeatherIcon } from 'weather-react-icons';
import 'weather-react-icons/lib/css/weather-icons.css';

const Weather = () => {
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    getWeather(-30.0331, -51.23).then((data) => setWeather(data));
  }, []);

  return (
    <WeatherBox>
      {weather && (
        <WeatherContent data-testid="weather-content">
          <WeatherTitle data-testid="location">
            {weather['name']} - RS
          </WeatherTitle>
          <WeatherData>
            <WeatherIcon
              iconId={weather['weather'][0]['id']}
              name="owm"
              style={{
                color: '#454545',
                fontSize: '27px',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            />
            <WeatherTemperature data-testid="temperature">
              {weather['main']['temp'].toFixed(0) + '°'}
            </WeatherTemperature>
          </WeatherData>
        </WeatherContent>
      )}
    </WeatherBox>
  );
};

export default Weather;
