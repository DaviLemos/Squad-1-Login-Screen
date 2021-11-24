import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Saudacao = styled.h1`
  margin-top: 40%;

  font-style: normal;
  font-weight: normal;

  font-size: 60px;
  line-height: 76px;

  color: #e0e0e0;

  font-family: Mark Pro;

  margin-right: auto;
  margin-bottom: 0;

  @media (max-width: ${widths.sm}) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default Saudacao;
