/*import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Body, 
    Aside, 
    LogoPiuPiuwer,
    Menu,
    BotãoMenuIcon,
    BotãoPiu,
    IconMenu,
    UserIdentification,
    UserIdentificationImage,
    UserInfo,
    UserName,
    UserEmail,
    Section,
    Profile,
    Back,
    Perfil,
    Capa,
    General,
    SetUpProfile,
    ViewUserInfo,
    Options,
    Option,
    Inferior, 
    Rigth,
    BarraPesquisa,
    Search,
    SearchImage,
    EspaçoCompartilhado,
    ShowMore,
    Title,
    Seguidores,
    Seguidor,
    SeguidorName,
    SeguidorEmail,
    SeguidorFoto,
    SeguidorBotão
} from './index';

import api from '.././Services/api';
import useAuth from '.././Routes/auth';

import Home from '../Images/Home.png';
import Explore from '../Images/Explore.png';
import Notification from '../Images/Notification.png';
import Messages from '../Images/Messages.png';
import Bookmarks from '../Images/Bookmarks.png';
import Lists from '../Images/Lists.png';
import Profile from '../Images/Profile.png';
import More from '../Images/More.png';
import Logo from '../Images/Logo.png'

import foto_capa from '../Images/PJ_capa.jpg';
import piu from '../Images/Vector 36.png';
import voltar from '../Images/Back.svg';

import searchSimbol from "../Images/Vector 33.png";
import { IconMenu } from './styles';
import { BotãoMenu } from './styles';
import { LogoPiuPiuwer } from './styles';
import { Menu } from './styles';

export default function Feed(){
    const {user} = useAuth();
    const token = useAuth();
    
    const [dados,setDados] = useState([]);
    const [formPiu,setFormPiu] = useState(['']);
    const [texto, setTexto] = useState('');
    const [opac,setOpac] = useState(1);
    const [opac2,setOpac2] = useState(1);
    const [cor,setCor] = useState('rgba(0,0,0,0)');
    const [id, setId] = useState(0);
    const [usuarioId,setusuarioId] = useState(0);
    const [aberto,setAberto] = useState('aberto');

    const [usuario,setUsuario] = useState({
            id: user['id'],
            username: user['username'],
            first_name: user['first_name'],
            last_name: user['last_name'],
            email: user['email'],
            sobre: user['sobre'],
            foto: user['foto'],
        });

    const [dadosUser,setDadosUser] = useState([{id:0,
    username:'',last_name:'',first_name:'',email:'',
    sobre:'',foto:''
    }]);

    const getApi = useCallback(async () => {
        const response = api.get('/pius/',{
        });
  
        setDados((await response).data);
    },[]);

    const getApi2 = useCallback(async () => {
        const response = api.get('/usuarios/',{
        });
  
        setDadosUser((await response).data);
    },[]);
    
    useEffect(() => {
        getApi();
    }, [dados]);

    useEffect(() => {
        getApi2();
    }, []);

    function gerarPiu(){
        setOpac(0.7);
        setOpac2(1);
        setCor("rgba(0,0,0,0.7)");
        setFormPiu(['libera']);
        setId(dados[0]['id']+1);
        setusuarioId(usuario['id']);
    }

    function removePost(){
        setFormPiu(['']);
        setOpac(1);
        setOpac2(1);
        setCor("rgba(0,0,0,0)");
    }

    const history = useHistory();

    const { LogOut } = useAuth();
    function Back(){
            LogOut();
    }

    return (
        <Body opacidade={opac} color={cor}>
            <Aside>
                <LogoPiuPiuwer source={Logo} />
                <Menu>
                        <BotãoMenuIcon><IconMenu source={Home} alt="Home"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Explore} alt="Explore"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Notification} alt="Notification"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Messages} alt="Messages"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Bookmarks} alt="Bookmarks"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Lists} alt="Lists"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={Profile} alt="Profile"/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu source={More} alt="More"/></BotãoMenuIcon>
                        <BotãoPiu onClick={gerarPiu}>
                            Piu
                        </BotãoPiu>
                <Menu>
                <UserIdentification>
                  <UserIdentificationImage source={Foto} alt="imagem" />
                    <UserInfo>
                        <UserName>Nome</UserName>
                        <UserEmail>@Nome</UserEmail>
                    </UserInfo>
                </UserIdentification>
            </Aside>
            <Section>
                <Superior>
                    <Profile>
                        <Back source={voltar} onClick={Back}/>
                        <UserInfo>
                            <UserName>{user['first_name']} {user['last_name']}</UserName>
                            <UserEmail>{user['seguidores']['length']} seguidores</UserEmail>
                        </UserInfo>
                    </Profile>
                    <General>
                        <Capa source={foto_capa}/>
                        <Perfil source={foto}/>
                        <ViewUser>
                            <UserInfo>
                                <UserName>{user['first_name']} {user['last_name']}<UserName>
                                <UserEmail>@{user['username']}</UserEmail>
                            </UserInfo>
                            <PiuImage source={piu}/>
                            <SetUpProfile id="SetUpProfile">Set up profile</SetUpProfile>
                        </ViewUser>
                    </General>
                    <Options>
                            <Option>Pius</Option>
                            <Option>Pius & RePius</Option>
                            <Option>Media</Option>
                            <Option>Likes</Option>
                    </Options>
                </Superior>
                <Inferior tamanho={(dados.length)*11}>
                </Inferior>
            </Section>
            <Rigth>
                <BarraPesquisa>
                    <Search type="text" name="search" placeholder="Search PiuPiuwer" />
                    <SearchImage source={searchSimbol}/>
                </BarraPesquisa>
                <EspaçoCompartilhado posição='center'>
                    <Seguidores>
                        <Seguidor><Title>You might like</Title></Seguidor>
                            <Seguidor>
                                <SeguidorName>{dado['first_name']} {dado['last_name']}</SeguidorName>
                                <SeguidorEmail>@{dado['username']}</SeguidorEmail>
                                <SeguidorFoto src={dado['foto']}/>
                                <SeguidorBotão>Seguir</SeguidorBotão>
                            </Seguidor>
                        <ShowMore>Show more</ShowMore>
                    </Seguidores>
                </EspaçoCompartilhado>
            </Rigth>
        </Body>
        )
}*/