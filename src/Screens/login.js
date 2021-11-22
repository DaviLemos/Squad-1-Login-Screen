import React, { useState } from 'react';
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

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div>
      <Form>
        <Titulo data-testid="login">Login</Titulo>

        <DivContainerText>
          <InputText
            placeholder="Usuário"
            required
            value={usuario}
            data-testid="input-user"
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
          />
          <User
            data-testid="icon-user"
            color="#E0E0E0"
            size={24}
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        </DivContainerText>

        <DivContainerPass>
          <InputPass
            placeholder="Senha"
            required
            value={senha}
            data-testid="input-password"
            onChange={(event) => {
              setSenha(event.target.value);
            }}
          />
          <Lock
            data-testid="icon-password"
            color="#E0E0E0"
            size={24}
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        </DivContainerPass>

        <Button data-testid="button-login">
          <Text>Continuar</Text>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
