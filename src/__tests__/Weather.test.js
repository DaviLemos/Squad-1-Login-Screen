// * React * //
import React from 'react';
// * Test * //
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
// * Component * //
import Weather from '../Components/Weather/Weather';
// * Api * //
import { getWeather } from '../api/api';

jest.mock('../api/api');

const mockWeather = {
  coord: {
    lon: -51.23,
    lat: -30.0331,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 308.73,
    feels_like: 306.99,
    temp_min: 308.14,
    temp_max: 310.31,
    pressure: 1007,
    humidity: 21,
  },
  visibility: 10000,
  wind: {
    speed: 1.34,
    deg: 9,
    gust: 4.92,
  },
  clouds: {
    all: 0,
  },
  dt: 1637602407,
  sys: {
    type: 2,
    id: 2021802,
    country: 'BR',
    sunrise: 1637569078,
    sunset: 1637618677,
  },
  timezone: -10800,
  id: 3452925,
  name: 'Porto Alegre',
  cod: 200,
};

describe('Weather Componet:', () => {
  it('Should Render Component', async () => {
    getWeather.mockResolvedValue(mockWeather);
    render(<Weather />);
    await waitFor(() =>
      expect(screen.getByTestId('weather-content')).toBeInTheDocument(),
    );
  });

  it('Should Render Weather Icon', async () => {
    getWeather.mockResolvedValue(mockWeather);
    render(<Weather />);
    await waitFor(() => expect(screen.getByTestId('icon')).toBeInTheDocument());
  });

  describe('Have Location:', () => {
    it('Have Component', async () => {
      getWeather.mockResolvedValue(mockWeather);
      render(<Weather />);
      await waitFor(() =>
        expect(screen.getByTestId('location')).toBeInTheDocument(),
      );
    });

    it('Have Text "Porto Alegre - RS"', async () => {
      getWeather.mockResolvedValue(mockWeather);
      render(<Weather />);
      await waitFor(() =>
        expect(screen.getByText('Porto Alegre - RS')).toBeInTheDocument(),
      );
    });

    it('Location Have Style', async () => {
      getWeather.mockResolvedValue(mockWeather);

      render(<Weather />);

      await waitFor(() =>
        expect(screen.getByTestId('location')).toHaveStyle({
          fontFamily: 'Mark Pro',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '18px',
        }),
      );
    });
  });

  describe('Have Temperature:', () => {
    it('Have Component', async () => {
      getWeather.mockResolvedValue(mockWeather);
      render(<Weather />);
      await waitFor(() =>
        expect(screen.getByTestId('temperature')).toBeInTheDocument(),
      );
    });

    it('Have Text "30°"', async () => {
      getWeather.mockResolvedValue(mockWeather);
      render(<Weather />);
      await waitFor(() => expect(screen.getByText('309°')).toBeInTheDocument());
    });

    it('Temperature Have Style', async () => {
      getWeather.mockResolvedValue(mockWeather);

      render(<Weather />);

      await waitFor(() =>
        expect(screen.getByTestId('temperature')).toHaveStyle({
          fontFamily: 'Mark Pro',
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#222222',
        }),
      );
    });
  });
});
