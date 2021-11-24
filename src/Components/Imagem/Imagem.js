import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Imagem = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  background: ${({ url }) => `url(${url}) no-repeat`};
  background-size: 100% 100%;

  @media (max-width: ${widths.sm}) {
    background: none;
    width: 0;
    height: 0;
  }
`;

export default Imagem;
