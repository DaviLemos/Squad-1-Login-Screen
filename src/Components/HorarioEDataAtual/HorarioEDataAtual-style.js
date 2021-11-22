import styled from 'styled-components';
import { myColor, myFontFamily, myFontstyle } from '../UI/variaveis';

// Estilização do componente, comportamento base e dinâmico
export const StyleParagraph = styled.p`
  font-family: ${myFontFamily};
  font-style: ${myFontstyle};
  color: ${myColor};
  text-align: center;

  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.ftWeight};
  font-size: ${(props) => props.ftSize};
  line-height: ${(props) => props.lnHeight};
  weight: ${(props) => props.weight};
`;
