import React from 'react';
import image from '../Images/image.svg';
import LogoCompassoBranco from '../Images/Logo-Compasso-Branco.svg';
import Saudacao from '../Components/Saudacao';
import Frase from '../Components/Frase';
import Home from '../Components/Home';
import Imagem from '../Components/Imagem';
import Logo from '../Components/Logo';


function BaseLogin() {
    return (
        <>
            <Home>
                <Saudacao>Olá,</Saudacao>
                <Frase>Para continuar navegando de forma segura, efetue o login na rede.</Frase>
                <Imagem src={image} className="img_notebook" alt="Notebook" />
                <Logo src={LogoCompassoBranco} className="img_Logo" alt="Logo Compasso Branco" />
            </Home>
        </>
    );
}

export default BaseLogin;