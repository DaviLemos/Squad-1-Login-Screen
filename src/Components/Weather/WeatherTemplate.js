import styled from 'styled-components';

export const WeatherBox = styled.div`
  margin-top: 15px;

`;

export const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const WeatherTitle = styled.p`
  display: flex;
  align-content: left;

  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 10px;
  width: 130px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const WeatherData = styled.div`
  display: flex;
  justify-content: center;
`;

export const WeatherTemperature = styled.div`
  margin-top: 8px;
  margin-bottom: auto;
  margin-left: 10px;


  font-family: Mark Pro;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;

  color: #222222;
`;
