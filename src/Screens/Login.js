import React from 'react';
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
import image from '../Images/image2.jpg';
import LogoCompassoBranco from '../Images/Logo-Compasso-Branco.svg';
import { User, Lock } from 'react-feather';
import { Titulo } from '../Components/Titulo/Titulo';
import { useFormik } from 'formik';
import validate from '../helper/validate.helper';

function Login() {
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    validate,
    onSubmit: (values) => {
      setUsuario(values.usuario);
      setSenha(values.senha);
    },
  });

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

            <DivContainerText>
              <InputText
                placeholder="Usuário"
                id="usuario"
                name="usuario"
                required
                value={formik.values.usuario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <User
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerText>

            <DivContainerPass>
              <InputPass
                placeholder="Senha"
                id="senha"
                name="senha"
                required
                value={formik.values.senha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Lock
                color="#E0E0E0"
                size={24}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              />
            </DivContainerPass>
            <div
              style={{
                color: '#E9B425',
                textAlign: 'center',
              }}
            >
              {formik.touched.usuario &&
                formik.errors.usuario &&
                'Ops, usuário inválido. Tente novamente.'}
              {formik.touched.senha &&
                formik.errors.senha &&
                formik.errors.senha}
            </div>
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
