import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const Form = styled.form`
  position: relative;
  @media (max-width: ${widths.sm}) {
    width: 80%;
    margin: 0 auto;
  }
`;
