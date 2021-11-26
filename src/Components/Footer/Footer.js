import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const Footer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  margin-top: -50px;

  @media (max-width: ${widths.sm}) {
    bottom: 0;
    position: absolute;
    width: 100vw;
    height: 80px;
  }
`;

export const TextFoo = styled.p`
  width: 370px;
  height: 40px;
  margin-top: 27px;
  padding-left: 200px;
  margin-left: 3%;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  text-align: right;
  color: #ffffff;
  @media (max-width: ${widths.sm}) {
    display: none;
  }
`;

export const TextRefr = styled.p`
  width: 60px;
  margin-left: 5%;
  padding-left: 80px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #ffffff;

  @media (max-width: ${widths.sm}) {
    display: none;
  }
`;
