import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

import { useHistory } from 'react-router-dom';

import Back_Image from '../../Images/Back.svg';

import { 
    EspaçoCompartilhado,
    Seguidores,
    Seguidor,
    Title,
    SeguidorBotão,
    SeguidorEmail,
    SeguidorFoto,
    SeguidorName,
    ShowMore
} from './styles';

export default function Seguir() {
    const [dadosUser,setDadosUser] = useState([{id:0,
        username:'',last_name:'',first_name:'',email:'',
        sobre:'',foto:''
        }]);
    const [aberto,setAberto] = useState('fechado');
    const [dados,setDados] = useState([]);

    const [aleatorio,setAleatorio] = useState([
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);

    const getApi2 = useCallback(async () => {
        const response = api.get('/usuarios/',{
        });
      
        setDadosUser((await response).data);
    },[]);

    useEffect(() => {
        getApi2();
    }, [dadosUser]);

    if(dadosUser['length']>2 && aberto=='fechado'){
        setAleatorio(
        [Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);
        setAberto('aberto');
    }

    function novoSeguidor(){
        setAleatorio(
        [...aleatorio,
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);
    }

    return(
        <EspaçoCompartilhado tamanho={aleatorio.length*10}>
            <Seguidor height={25}><Title>You might like</Title></Seguidor>

            {aleatorio.map ((aleatorioNum, index2) =>{
            if (aberto=='aberto'){
            return(
                <Seguidor height={150}>
                    <Seguidores>
                        <SeguidorFoto source={dadosUser[aleatorioNum]['foto']}/>
                        <SeguidorName>{dadosUser[aleatorioNum]['first_name']} {dadosUser[aleatorioNum]['last_name']}</SeguidorName>
                        <SeguidorEmail>@{dadosUser[aleatorioNum]['username']}</SeguidorEmail>
                        <SeguidorBotão>Seguir</SeguidorBotão>
                    </Seguidores>
                </Seguidor>
            );}})}

            <Seguidor height={25}><ShowMore onPress={novoSeguidor}>Show more</ShowMore></Seguidor>
            </EspaçoCompartilhado>
    );
}

/*{dadosUser.map ((dado, index) =>{
                {aleatorio.map ((aleatorioNum, index2) =>{

                if(aleatorio[index2]==index)
                return(
                        <SeguidorBotão>Seguir</SeguidorBotão>
            )})}})}*/