import axios from 'axios';

export const getWeather = async (lat, long) => {
  let res = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: long,
      appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
      lang: 'pt',
      units: 'metric',
    },
  });
  console.log(res.data);
  return res.data;
};
