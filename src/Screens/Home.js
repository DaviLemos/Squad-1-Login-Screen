import React from 'react';
import {
  LogoBola,
  PrimeiraDiv,
  SegundaDiv,
} from '../Components/Logos/LogoBola';
import { LogoSuperior } from '../Components/Logos/LogoSuperior';
import bolaLogoCompasso1 from '../Images/bolaLogoCompasso1.svg';
import LogoCompasso1 from '../Images/LogoCompasso1.svg';
import Barra from '../Images/Barradiv.svg';
import { DivCaixa, Missao, MissaoPequeno } from '../Components/Titulo/Missao';
import { Footer, TextFoo, TextRefr } from '../Components/Footer/Footer';
// import styled from "styled-components";
import { ButtonLogout, TextLogout } from '../Components/Buttons/ButtomLogout';
import {
  ButtonContNav,
  TextContNav,
} from '../Components/Buttons/ButtonContNav';
import { DivPagina } from '../Components/DivPagina/DivPagina';
import { BarraDiv } from '../Components/Logos/Barra';
import HorarioEDataAtual from '../Components/HorarioEDataAtual/HorarioEDataAtual';
import Weather from '../Components/Weather/Weather';
function Home() {
  return (
    <DivPagina>
      <PrimeiraDiv>
        <LogoSuperior src={LogoCompasso1} alt="Logo Compasso Superior" />
        <HorarioEDataAtual />
        <Weather />
      </PrimeiraDiv>
      <SegundaDiv>
        <LogoBola src={bolaLogoCompasso1} alt="Logo Compasso" />
        <DivCaixa>
          <Missao
            style={{ fontSize: '22px', height: '38px', marginBottom: '15px' }}
            data-testid="missao-text-1"
          >
            Our mission is
          </Missao>
          <MissaoPequeno data-testid="missão-pequeno-text-1">
            Nossa missão é
          </MissaoPequeno>
          <Missao data-testid="missao-text-2">to transform the world</Missao>
          <MissaoPequeno data-testid="missão-pequeno-text-2">
            transformar o mundo
          </MissaoPequeno>
          <Missao data-testid="missao-text-3">
            building digital experiences
          </Missao>
          <MissaoPequeno data-testid="missão-pequeno-text-3">
            construindo experiências digitais
          </MissaoPequeno>
          <Missao data-testid="missao-text-4">
            that enable our client’s growth
          </Missao>
          <MissaoPequeno data-testid="missão-pequeno-text-4">
            que permitam o crescimento dos nossos clientes
          </MissaoPequeno>
        </DivCaixa>
      </SegundaDiv>
      <Footer>
        <ButtonLogout style={{ position: 'absolute', right: 0 }}>
          <TextLogout>Logout</TextLogout>
        </ButtonLogout>
        <ButtonContNav style={{ position: 'absolute', right: 90 }}>
          <TextContNav>Continuar Navegando</TextContNav>
        </ButtonContNav>
        <TextFoo>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
          janela para continuar a navegar.
        </TextFoo>
        <BarraDiv src={Barra} />
        <TextRefr>Application refresh in</TextRefr>
      </Footer>
    </DivPagina>
  );
}

export default Home;
