import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import useAuth from '../.././Routes/auth';

import { useHistory } from 'react-router-dom';

import Back_Image from '../../Images/Back.svg';

import { 
    Cadastro,
    Header,
    Form,
    Back,
    BackImage,
    Label,
    Input,
    Infos,
    Continuar,
    Tamanho
} from './styles';

export default function CampoPiu() {
    const { user } = useAuth();
    console.log(user);

    const [mensagem,setMensagem] = useState('');
    const [color,setColor] = useState('black');
    const [usuarioId,setusuarioId] = useState(user['id']);
    
    const history = useHistory();

    function login(){
        history.push('/feed');
    }

    useEffect(() => {
        if (mensagem.length>139){
            setColor("red");
        }
        else{
            setColor("black");
        }
    }, [mensagem]);

    async function NovoPiu(){
        if(mensagem.length<140){
            const response = await api.post('pius/',
            {
                usuario: usuarioId,
                texto: mensagem
            }).then(()=>{
                history.push('/feed');
            })
        }

        else{
            alert("A mensagem tem mais de 140 caracteres");
        }
    }

    return (
        <Cadastro>
            <Header>
                <Back>
                    <BackImage source={Back_Image} onClick={login}/>
                </Back>
                <Form>
                    <Label>Mensagem</Label>
                    <Input
                    corMuda={color}
                    name="name"
                    placeholder="Digite seu Piu"
                    value={mensagem}
                    onChange={(e) => {setMensagem(e.target.value)}}/>
                </Form>
                <Infos>
                    <Tamanho cor={color}>{mensagem.length}/140</Tamanho>
                    <Continuar onPress={NovoPiu}>Piu</Continuar>
                </Infos>
            </Header>
        </Cadastro>
  );
}