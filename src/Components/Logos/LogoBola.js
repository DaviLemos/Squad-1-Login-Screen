import styled from "styled-components";
import { widths } from '../UI/variaveis';

export const LogoBola = styled.img `
width: 25%;
height: 25%;

@media (max-width: ${widths.sm}) {

    width: 100%;
    height: 100%;
    margin-left: -10%;
    margin-top: 50px;
  }
`

export const PrimeiraDiv = styled.div`
display: flex; 
margin-bottom: 90px;
justify-content: space-between;

@media (max-width: ${widths.sm}) {
  width: 100%;
  margin:0;
}
`
export const SegundaDiv = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: ${widths.sm}) {
  width: 100%;
}
`