import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Background = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;

  height: 100vh;
  width: 100%;
  @media (max-width: ${widths.sm}) {
    width: 100%;
    height: 120vh;
    /* margin-bottom: 15%; */
  }
`;

export default Background;
