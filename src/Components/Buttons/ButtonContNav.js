import styled from "styled-components";
import { widths } from '../UI/variaveis';

export const ButtonContNav = styled.button.attrs({ type: 'submit' })`
position: absolute;
right: 90px;

width: 90px;
height: 69px;
border: none;
background-color:  #ffffff;
cursor: pointer;

@media (max-width: ${widths.sm}) {
right:0;
width: 70%;
height: 80px;

  }
`

export const TextContNav = styled.p` 


font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 10px;
margin-top: 12px;
line-height: 12px;
align-items: center;
text-align: center;

color: #C13216;

@media (max-width: ${widths.sm}) {
    font-size:14px;
    width: 18px;
    padding-left:100px;
}

`