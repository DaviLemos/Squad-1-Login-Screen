import axios from 'axios';

export const userLogin = (userData) => {
  return axios
    .post('http://localhost:3333/login', userData)
    .then(function (res) {
      let data = res.data;
      return data;
    })
    .catch(function (error) {
      return error.response.data;
    });
};

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
  return res.data;
};
