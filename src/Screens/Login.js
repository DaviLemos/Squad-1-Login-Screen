import React from 'react';
import { Button, Text } from '../Components/Buttons/ButtonContinue';
import { Form } from '../Components/Forms/Forms';
import {
  InputPass,
  InputText,
  DivContainerText,
  DivContainerPass,
} from '../Components/Inputs/InputBase';
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
    <div>
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
          {formik.touched.usuario && formik.errors.usuario ? (
            <div>{formik.errors.usuario}</div>
          ) : null}
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
          {formik.touched.senha && formik.errors.senha ? (
            <div>{formik.errors.senha}</div>
          ) : null}
          <Lock
            color="#E0E0E0"
            size={24}
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        </DivContainerPass>

        <Button>
          <Text>Continuar</Text>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
