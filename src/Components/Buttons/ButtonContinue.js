import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const Button = styled.button.attrs({ type: 'submit' })`
  /* position: absolute; */
  /* left: 285px;
  top: 838px; */
  width: 379px;
  height: 67px;

  margin-top: 50px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: ${widths.sm}) {
    width: 100%;
    margin-bottom: 15%;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
`;
