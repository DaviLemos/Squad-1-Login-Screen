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
