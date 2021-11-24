import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const Logo = styled.img`
  width: 306px;
  height: 69px;
  margin: 35px auto 0;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${widths.sm}) {
    height: 60px;
    position: absolute;
    top: 0;
    right: 19px;
  }
`;

export default Logo;
