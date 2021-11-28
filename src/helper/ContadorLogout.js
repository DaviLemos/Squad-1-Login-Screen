import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, IndexRoute } from 'react-router';
import { useJwt } from 'react-jwt';
import TimeLogout from '../Components/Time Logout/TimeLogout';
import TimerContainer from '../Components/TimerContainer/TimerContainer';
import Seconds from '../Components/Seconds/Seconds';
import Login from '../Screens/Login';
import App from '../App';
import ls from 'local-storage';

const ContadorLogout = ({ token }) => {
  const navigate = useNavigate();
  const [contador, setContador] = useState();
  const { decodedToken, isExpired } = useJwt(token);

  function toLogin() {
    ls.remove('token');
    navigate('/');
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (decodedToken) {
        if (isExpired) {
          toLogin();
        } else {
          const dataExp = new Date(decodedToken.exp * 1000);
          const dataAtual = new Date();
          const a = [
            dataExp.getHours(),
            dataExp.getMinutes(),
            dataExp.getSeconds(),
          ];
          const b = [
            dataAtual.getHours(),
            dataAtual.getMinutes(),
            dataAtual.getSeconds(),
          ];
          var secondsA = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
          var secondsB = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];
          secondsA - secondsB <= 0
            ? toLogin()
            : setContador(secondsA - secondsB);
        }
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, [decodedToken, isExpired]);

  return (
    <TimerContainer data-testid="contador">
      <TimeLogout>{contador}</TimeLogout>
      <Seconds>Seconds</Seconds>
    </TimerContainer>
  );
};

export default ContadorLogout;
