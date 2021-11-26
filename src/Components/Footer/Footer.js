import styled from "styled-components"
import { widths } from '../UI/variaveis';

export const Footer = styled.div`
position:relative;
display:flex;
width: 100%;
height: 69px;
Background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
margin-top: -50px;

@media (max-width: ${widths.sm}) {
bottom:0;
position: absolute;
 width: 100vw;
 height: 80px;
  }
`

export const TextFoo = styled.p` 
width: 370px;
height: 40px;
margin-top: 22px;
padding-left: 200px;

font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 10px;
text-align: right;
color: #FFFFFF;
@media (max-width: ${widths.sm}) {
  display:none;
}

`
export const TextRefr = styled.p`

width: 60px;
padding-left: 80px;
margin-top: 20px;


font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;
text-align: right;
color: #FFFFFF;

@media (max-width: ${widths.sm}) {
  display:none;
}
`
