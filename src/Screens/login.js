import React, {useState} from "react";
import { Button, Text } from "../Components/Buttons/ButtonContinue";
import { Form } from "../Components/Forms/Forms";
import { InputPass, InputText, DivContainerText, DivContainerPass } from "../Components/Inputs/InputBase";
import { User, Lock } from 'react-feather';
import { Titulo } from "../Components/Titulo/Titulo";
    

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

function Login(){

    return(
        <div>

    <Form>

      <Titulo>Login</Titulo>

      <DivContainerText>
        <InputText
          placeholder="Usuário"
          required
          value={usuario}

          onChange={(event) => {
            setUsuario(event.target.value);
        }}
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
          value={senha}
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