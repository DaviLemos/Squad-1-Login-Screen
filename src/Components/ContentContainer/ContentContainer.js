import styled from 'styled-components';
import { widths } from '../UI/variaveis';

const ContentContainer = styled.div`
  width: 379px;
  height: 80%;

  display: flex;
  flex-direction: column;
  @media (max-width: ${widths.sm}) {
    height: 100%;
  }
`;

export default ContentContainer;
