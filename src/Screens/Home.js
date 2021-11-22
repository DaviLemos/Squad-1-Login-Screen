import React from "react";
import { LogoBola } from "../Components/Logos/LogoBola";
import { LogoSuperior } from "../Components/Logos/LogoSuperior";
import bolaLogoCompasso1 from '../Images/bolaLogoCompasso1.svg'
import LogoCompasso1 from '../Images/LogoCompasso1.svg'
import { DivCaixa, Missao, MissaoPequeno } from '../Components/Titulo/Missao'
import { DivLine, Footer, TextFoo, TextRefr } from "../Components/Footer/Footer";
// import styled from "styled-components";
import { ButtonLogout, TextLogout } from "../Components/Buttons/ButtomLogout";
import { ButtonContNav, TextContNav } from "../Components/Buttons/ButtonContNav";
import { DivPagina } from "../Components/DivPagina/DivPagina";

function Home() {

    return (
        <DivPagina>
            <LogoSuperior src={LogoCompasso1} alt="Logo Compasso Superior" />
            <LogoBola src={bolaLogoCompasso1} alt="Logo Compasso" />
            <DivCaixa>
                <Missao style={{ fontSize: '36px', height: '38px', marginBottom: '20px' }}>Our mission is</Missao>
                <MissaoPequeno>Nossa missão é</MissaoPequeno>
                <Missao>to transform the world</Missao>
                <MissaoPequeno>transformar o mundo</MissaoPequeno>
                <Missao>building digital experiences</Missao>
                <MissaoPequeno>construindo experiências digitais</MissaoPequeno>
                <Missao>that enable our client’s growth</Missao>
                <MissaoPequeno>que permitam o crescimento dos nossos clientes</MissaoPequeno>
            </ DivCaixa >
            <Footer>
                <TextFoo>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</TextFoo>
                <DivLine />
                <TextRefr>Application refresh in</TextRefr>
                <ButtonLogout><TextLogout>Logout</TextLogout></ButtonLogout>
                <ButtonContNav><TextContNav>Continuar Navegando</TextContNav></ButtonContNav>
            </Footer>
        </DivPagina>
    )
}

export default Home