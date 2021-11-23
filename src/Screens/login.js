import React from 'react';
import Container from '../Components/Container/Container';
import Background from '../Components/Background/Background';
import Saudacao from '../Components/Saudacao/Saudacao';
import Frase from '../Components/Frase/Frase';
import Imagem from '../Components/Imagem/Imagem';
import Logo from '../Components/Logo/Logo';
import image from '../Images/image2.jpg';
import LogoCompassoBranco from '../Images/Logo-Compasso-Branco.svg';

function Login() {
  return (
    <Container>
      <Background>
        <Saudacao>Olá,</Saudacao>
        <Frase>
          Para continuar navegando de forma segura, efetue o login na rede.
        </Frase>
      </Background>
      <Imagem url={image} className="img_notebook" alt="Notebook">
        <Logo
          src={LogoCompassoBranco}
          className="img_Logo"
          alt="Logo Compasso Branco"
        />
      </Imagem>
    </Container>
  );
}

export default Login;
