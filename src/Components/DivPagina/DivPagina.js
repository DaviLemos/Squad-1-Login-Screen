import styled from "styled-components"
import { widths } from '../UI/variaveis';

export const DivPagina = styled.div` 
width: 100%;
height: 100%;
background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

@media (max-width: ${widths.sm}) {
    width: 100%;
    height: 100vh;
  }

`