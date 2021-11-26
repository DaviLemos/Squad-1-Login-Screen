import styled from "styled-components";
import { widths } from '../UI/variaveis';

export const LogoSuperior = styled.img `

width: 7%;
height:7%;
margin: 15px 0 0 30px;

@media (max-width: ${widths.sm}) {
    width: 40%;
    height: 40%;
    margin-left: 2px;
    margin-top: 20px
  }

`