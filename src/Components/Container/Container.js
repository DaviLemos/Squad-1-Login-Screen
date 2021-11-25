import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${widths.sm}) {
    width: 100%;
  }
`;

export default Container;
