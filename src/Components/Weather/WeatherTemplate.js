import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const WeatherBox = styled.div`
  margin-top: 15px;

  @media (max-width: ${widths.sm}) {
    position: absolute;
    left: 280px;
    margin-top: 20px;
  }
`;

export const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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

  @media (max-width: ${widths.sm}) {
    font-size: 14px;
  }
`;

export const WeatherData = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${widths.sm}) {
    margin-left: 20px;
  }
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

  @media (max-width: ${widths.sm}) {
    font-size: 30px;
    margin-top: 10px;
    padding-left: 0px;
  }
`;
