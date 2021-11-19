import React from "react";
import { Button, Text } from "../Components/Buttons/ButtonContinue";
import { Form } from "../Components/Forms/Forms";
import { InputPass, InputText, DivContainerText, DivContainerPass } from "../Components/Inputs/InputBase";
import { User, Lock } from 'react-feather';
import { Titulo } from "../Components/Titulo/Titulo";


function Login(){

    return(
        <div>

    <Form>

      <Titulo>Login</Titulo>

      <DivContainerText>
        <InputText
          placeholder="Usuário"
          required
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
          required
        />
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
    )
}

export default Login