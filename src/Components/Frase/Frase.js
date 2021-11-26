import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Frase = styled.p`
  width: 301px;
  height: 90px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: #e0e0e0;

  font-family: Mark Pro;

  margin-right: auto;
  margin-top: 0;

  @media (max-width: ${widths.sm}) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5%;
  }
`;

export default Frase;
