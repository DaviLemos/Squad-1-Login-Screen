import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const ButtonLogout = styled.button.attrs({ type: 'submit' })`
  position: absolute;
  right: 0;
  width: 90px;
  height: 80px;
  border: none;
  background-color: #1c1d20;
  cursor: pointer;

  @media (max-width: ${widths.sm}) {
    left: 0px;
    width: 30%;
    height: 80px;
  }
`;

export const TextLogout = styled.p`
  font-family: Mark Pro;
  font-style: normal;
  font-weight: bold;
  margin-top: 10px;
  font-size: 10px;
  line-height: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: ${widths.sm}) {
    font-size: 14px;
  }
`;
