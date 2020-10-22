import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Routes/auth';

import LogoMenor from '../../Images/LogoMenor.svg';

import { 
    Wrapper,
    Header,
    Logo,
    LogoImage,
    CampoLogin,
    Title,
    Forms,
    Input,
    Label,
    Entrar,
    EntrarText,
    Cadastrar,
    CadastrarText
} from './styles';

export default function Login() {
    const { signIn } = useAuth();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = useCallback(async () => {

    await signIn({username, password});
    },[signIn, username, password]);

    const history = useHistory();
    function inscrever(){
        history.push('/signup1');
    }

  return (
    <Wrapper>
        <Header>
        <Logo>
            <LogoImage source={LogoMenor}/>
        </Logo>
        <CampoLogin>
            <Title>
                Entrar no PiuPiuwer
            </Title>
            <Forms>
                <Label>Celular, e-mail ou nome de usuário</Label>
                <Input 
                    name="name"
                    placeholder="Digite o nome de usuário"
                    autoCorrect="false"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <Label>Senha</Label>
                <Input 
                    name="password"
                    placeholder="Digite sua senha"
                    autoCompleteType={'password'}
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Entrar onPress={handleLogin}>
                    <EntrarText>Entrar</EntrarText>
                </Entrar>
            </Forms>
            <Cadastrar onPress={inscrever}>
                <CadastrarText>Esqueceu sua senha?  Inscrever-se no PiuPiutter</CadastrarText>
            </Cadastrar>
        </CampoLogin>

        </Header>
    </Wrapper>
  );
}
