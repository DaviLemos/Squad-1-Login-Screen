import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import isBoth from '../helper/isBoth.helper';
//* APi * //
import { userLogin } from '../api/api';
import ls from 'local-storage';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setMessage] = useState('');
  const [fieldUsuario, setFieldUsuario] = useState(false);
  const [fieldSenha, setFieldSenha] = useState(false);

  const formik = useFormik({
    initialValues: {
      usuario: null,
      senha: null,
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    userLogin({ email: values.usuario, password: values.senha }).then(function (
      data,
    ) {
      if (data.auth) {
        setFieldUsuario(false);
        setFieldSenha(false);
        setMessage('');
        ls.set('token', data.token);
        navigate('/home');
      } else {
        data.message.includes('usuário')
          ? setFieldUsuario(true)
          : setFieldUsuario(false);
        data.message.includes('senha')
          ? setFieldSenha(true)
          : setFieldSenha(false);
        setMessage(data.message);
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
            <Titulo data-testid="login">Login</Titulo>
            <DivContainerText
              error={
                (formik.touched.usuario && formik.errors.usuario) ||
                fieldUsuario
              }
            >
              <InputText
                data-testid="input-user"
                placeholder="Usuário"
                id="usuario"
                name="usuario"
                required
                value={formik.values.usuario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <User
                data-testid="icon-user"
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerText>
            <DivContainerPass
              error={
                (formik.touched.senha && formik.errors.senha) || fieldSenha
              }
            >
              <InputPass
                data-testid="input-password"
                placeholder="Senha"
                id="senha"
                name="senha"
                required
                value={formik.values.senha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Lock
                data-testid="icon-password"
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerPass>

            <Error>
              {(isBoth(formik.errors) || errorMessage) && (
                <div>
                  {' '}
                  Ops, {isBoth(formik.errors) || errorMessage}.<br /> Tente
                  Novamente!
                </div>
              )}
            </Error>
            <Button data-testid="button-login">
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
