import React from "react";
import { LogoBola, PrimeiraDiv, SegundaDiv } from "../Components/Logos/LogoBola";
import { LogoSuperior } from "../Components/Logos/LogoSuperior";
import bolaLogoCompasso1 from '../Images/bolaLogoCompasso1.svg'
import LogoCompasso1 from '../Images/LogoCompasso1.svg'
import Barra from  '../Images/Barradiv.svg'
import { DivCaixa, Missao, MissaoPequeno } from '../Components/Titulo/Missao'
import { Footer, TextFoo, TextRefr } from "../Components/Footer/Footer";
// import styled from "styled-components";
import { ButtonLogout, TextLogout } from "../Components/Buttons/ButtomLogout";
import { ButtonContNav, TextContNav } from "../Components/Buttons/ButtonContNav";
import { DivPagina } from "../Components/DivPagina/DivPagina";
import { BarraDiv } from "../Components/Logos/Barra";
import ContadorLogout from '../helper/ContadorLogout.js';

function Home() {

    return (
        <DivPagina>
            <PrimeiraDiv>
                <LogoSuperior src={LogoCompasso1} alt="Logo Compasso Superior" />
            </PrimeiraDiv>
            <SegundaDiv>
                <LogoBola src={bolaLogoCompasso1} alt="Logo Compasso" />
                <DivCaixa>
                    <Missao style={{ fontSize: '22px', height: '38px', marginBottom: '15px' }}>Our mission is</Missao>
                    <MissaoPequeno>Nossa missão é</MissaoPequeno>
                    <Missao>to transform the world</Missao>
                    <MissaoPequeno>transformar o mundo</MissaoPequeno>
                    <Missao>building digital experiences</Missao>
                    <MissaoPequeno>construindo experiências digitais</MissaoPequeno>
                    <Missao>that enable our client’s growth</Missao>
                    <MissaoPequeno>que permitam o crescimento dos nossos clientes</MissaoPequeno>
                </ DivCaixa >
            </SegundaDiv>
            <Footer>
                <ButtonLogout style={{ position: 'absolute', right: 0 }}>
                    <TextLogout>Logout</TextLogout>
                    </ButtonLogout>
                <ButtonContNav style={{ position: 'absolute', right: 90 }}>
                    <TextContNav>Continuar Navegando</TextContNav >
                    </ButtonContNav>
                    <TextFoo>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</TextFoo>
                    <BarraDiv src={Barra}/>
                    <TextRefr>Application refresh in</TextRefr>
                    <ContadorLogout/>
                    
            </Footer>
        </DivPagina>
    )
}

export default Home