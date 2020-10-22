import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import LogoMenor from '../../Images/LogoMenor.svg';
import Back_Image from '../../Images/Back.svg';

import { 
    Cadastro,
    Header,
    Form,
    Back,
    BackImage,
    Logo,
    LogoImage,
    Title,
    Label,
    Input,
    Aviso,
    Data,
    Continuar
} from './styles';

export default function SignUp1() {

    const [name,setName] = useState('');
    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');
    const [senha,setSenha] = useState('');

    function submit(){
        if (senha.length>7){
        console.log({name,day,month,year,senha,});
        history.push('/feed');
        }
    }

    const history = useHistory();

    function login(){
        history.push('/');
    }
    return (
        <Cadastro>
            <Header>
                <Back>
                    <BackImage source={Back_Image} onClick={login}/>
                </Back>
                <Logo>
                    <LogoImage source={LogoMenor}/>
                </Logo>
                <Title>Crie sua conta</Title>
                <Form>
                    <Label>Nome</Label>
                    <Input
                    name="name"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}/>
                    
                    <Data>
                    <Label>Data de nascimento</Label>
                    <Aviso>Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de empresa de um animal de estimação ou outros.</Aviso>
                        <Label>Dia</Label>
                        <Input
                        name="day"
                        value={day}
                        type="number"
                        onChange={(e) => {setDay(e.target.value)}}/>
                        <Label>Mês</Label>
                        <Input
                        name="month"
                        value={month}
                        type="number"
                        onChange={(e) => {setMonth(e.target.value)}}/>
                        <Label>Ano</Label>
                        <Input
                        name="year"
                        value={year}
                        type="number"
                        onChange={(e) => {setYear(e.target.value)}}/>
                    </Data>
                    
                    <Label>Senha</Label>
                    <Aviso>No mínimo 8 caracteres</Aviso>
                    <Input
                    name="password"
                    placeholder="Digite sua senha"
                    autoCompleteType={'password'}
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value)}}
                    />

                    <Continuar type="submit" onPress={submit}>Avançar</Continuar>
                </Form>
            </Header>
        </Cadastro>
  );
}