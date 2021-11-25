import React, { useState, useEffect } from 'react';
import { Button, Text } from '../Components/Buttons/ButtonContinue';
import { Form } from '../Components/Forms/Forms';
import {
  InputPass,
  InputText,
  DivContainerText,
  DivContainerPass,
} from '../Components/Inputs/InputBase';
import Container from '../Components/Container/Container';
import Background from '../Components/Background/Background';
import Saudacao from '../Components/Saudacao/Saudacao';
import Frase from '../Components/Frase/Frase';
import Imagem from '../Components/Imagem/Imagem';
import Logo from '../Components/Logo/Logo';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import Error from '../Components/Error/Error';
import image from '../Images/image2.jpg';
import LogoCompassoBranco from '../Images/Logo-Compasso-Branco.svg';
import { User, Lock } from 'react-feather';
import { Titulo } from '../Components/Titulo/Titulo';
import { useFormik } from 'formik';
import validate from '../helper/validate.helper';
//* APi * //
import { userLogin } from '../api/api';

function Login() {
  const [countError, setCountError] = useState(0);
  const [changeUsuario, setChangeUsuario] = useState(false);
  const [changeSenha, setChangeSenha] = useState(false);
  const [errorMessage, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      usuario: null,
      senha: null,
    },
    validate,
    onSubmit: (values) => {
      // setSenha(values.senha);
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    userLogin({ email: values.usuario, password: values.senha }).then(function (
      data
    ) {
      if (data.auth) {
        // Quando loga com sucesso
      } else {
        // Quando tem algum erro na hora de logar
      }
    });
  };

  return (
    <Container>
      <Background>
        <ContentContainer>
          <Saudacao>Olá,</Saudacao>
          <Frase>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Frase>

          <Form onSubmit={formik.handleSubmit}>
            <Titulo>Login</Titulo>
            <DivContainerText
              error={formik.touched.usuario && formik.errors.usuario}
            >
              <InputText
                placeholder="Usuário"
                id="usuario"
                name="usuario"
                required
                value={formik.values.usuario}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setChangeUsuario(true);
                }}
              />

              <User
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerText>
            <DivContainerPass
              error={formik.touched.senha && formik.errors.senha}
            >
              <InputPass
                placeholder="Senha"
                id="senha"
                name="senha"
                required
                value={formik.values.senha}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setChangeSenha(true);
                }}
              />

              <Lock
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerPass>

            <Error>
              {formik.touched.usuario &&
                formik.errors.usuario &&
                changeUsuario && (
                  <div>Ops, usuário inválido. Tente novamente.</div>
                )}
              {formik.touched.senha && formik.errors.senha && changeSenha && (
                <div>Ops,senha inválido. Tente novamente.</div>
              )}
              {((formik.touched.usuario && formik.errors.usuario) ||
                (formik.touched.senha && formik.errors.senha)) &&
                changeUsuario &&
                changeSenha && (
                  <div>Ops, usuário e senha inválido. Tente novamente.</div>
                )}
            </Error>
            <Button>
              <Text>Continuar</Text>
            </Button>
          </Form>
        </ContentContainer>
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
