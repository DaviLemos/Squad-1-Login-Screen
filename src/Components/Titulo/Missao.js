import styled from "styled-components"
import { widths } from '../UI/variaveis';

export const Missao = styled.p`
font-family: Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 81px;
text-align: right;
color: #C12D18;
margin: 0;
height: 55px;

@media (max-width: ${widths.sm}) {
    display:none;
  }
`

export const MissaoPequeno = styled.p`
font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 20px;
text-align: right;
color: #222222;
margin: 4px 0 0 0;
height: 8px;

@media (max-width: ${widths.sm}) {
    display:none;
  }
 `


export const DivCaixa = styled.div`
margin-right: 10%;
padding-left: 280px;
padding-top: 30px;

@media (max-width: ${widths.sm}) {
    display:none;
    width: 0;
  }
`