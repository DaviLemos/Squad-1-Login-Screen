import styled from 'styled-components';
import { widths } from '../UI/variaveis';

export const InputText = styled.input.attrs({ type: 'email' })`
  width: 310px;
  border-radius: 50px;
  color: #e0e0e0;
  padding-left: 20px;
  border: none;
  background: none;

  ::placeholder {
    color: #e0e0e0;
    font-size: 16px;
    font-family: Mark Pro;
    font-style: normal;
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
`;

export const InputPass = styled.input.attrs({ type: 'password' })`
  width: 310px;
  border-radius: 50px;
  color: #e0e0e0;
  padding-left: 20px;
  border: none;
  background: none;

  ::placeholder {
    color: #e0e0e0;
    font-size: 16px;
    font-family: Mark Pro;
    font-style: normal;
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
`;

export const DivContainerText = styled.div`
  width: 377px;
  height: 58px;

  display: flex;
  text-align: center;
  margin-bottom: 33px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  @media (max-width: ${widths.sm}) {
    width: 100%;
    svg {
      margin-right: 5%;
    }
  }
`;

export const DivContainerPass = styled.div`
  width: 377px;
  height: 58px;

  display: flex;
  text-align: center;
  margin-bottom: 50px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  @media (max-width: ${widths.sm}) {
    width: 100%;
    svg {
      margin-right: 5%;
    }
  }
`;
