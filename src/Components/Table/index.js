import React, { useEffect, useState, useCallback } from 'react';
import {
    Table,
    Tr,
    InfoSuperior,
    Foto,
    FotoView,
    UserInfo,
    UserName,
    UserEmail,
    Time,
    Options,
    Image,
    Message,
    InfoInferior,
    ViewReaction,
    Li,
    Img,
    Text
} from './styles';

import useAuth from '../.././Routes/auth';
import api from '../.././Services/api';
        
import message_coment from '../../Images/Coment.png';
import circle_coment from '../../Images/Circle.png';
import love_coment from '../../Images/Love.png';
import up_coment from '../../Images/Up.png';
import optionsImage from '../../Images/Options.png';

export default function PiuComent() {
    const [dados,setDados] = useState(['']);
    const [aberto,setAberto] = useState('fechado');
    
    const token = useAuth();
    
    const getApi = useCallback(async () => {
        const response = api.get('/pius/',{
        });
        setDados((await response).data);
        setAberto('aberto');
    },[]);

    useEffect(() => {
        getApi();
    }, [dados]);

    return(
        <Table>
        {dados.map ((dado) =>{
        if(aberto=='aberto'){
            let horario=dado['horario'];

        return(
        <Tr>
            <InfoSuperior>
                <FotoView>
                    <Foto source={dado['usuario']['foto']} />
                </FotoView>    
                <UserInfo>
                    <UserName>{dado['usuario']['first_name']} {dado['usuario']['last_name']}</UserName>
                    <UserEmail>{dado['usuario']['username']}</UserEmail>
                    <Time>{[horario[8],horario[9]]} {[horario[5],horario[6]]} {[horario[0],horario[1],horario[2],horario[3]]} - {[horario[11],horario[12],horario[13],horario[14],horario[15],horario[16],horario[17],horario[18]]}</Time>
                </UserInfo>
                <Options>
                    <Image source={optionsImage}/>
                </Options>
            </InfoSuperior>
            <Message>{dado['texto']}</Message>
            <InfoInferior>
                <ViewReaction>
                    <Li>
                        <Img cor={'white'} height={17} width={22} source={message_coment}/>
                        <Text>{dado['likers']['length']}</Text>
                    </Li>
                    <Li>
                        <Img cor={'white'} height={22} width={22} source={circle_coment}/>
                    </Li>
                    <Li>
                        <Img cor={'white'} height={21} width={22} source={love_coment}/>
                        <Text>{dado['favoritado_por']['length']}</Text>
                    </Li>
                    <Li>
                        <Img cor={'white'} height={18} width={12} source={up_coment}/>
                    </Li>
                </ViewReaction>
            </InfoInferior>
        </Tr>
        );}})}
        </Table>
    );
}
