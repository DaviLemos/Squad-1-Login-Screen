import styled from 'styled-components';

export const WeatherBox = styled.div`
  margin-top: 25px;
`;

export const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
`;

export const WeatherTitle = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;

  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  margin-top: auto;
  margin-bottom: auto;
`;

export const WeatherData = styled.div`
  display: flex;
  justify-content: center;
`;

export const WeatherTemperature = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;

  font-family: Mark Pro;
  font-size: 48px;
  font-style: normal;
  font-weight: bold;

  color: #222222;
`;
