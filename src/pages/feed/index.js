import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../.././Services/api';
import useAuth from '../.././Routes/auth';

import {
    Body, 
    Aside, 
    LogoPiuPiuwer,
    Menu,
    BotãoMenuIcon,
    IconMenu,
    BotãoPiu,
    UserIdentification,
    UserIdentificationImage,
    UserInfo,
    UserName,
    UserEmail,
    Section,
    Superior,
    Profile,
    Back,
    General,
    Capa,
    Perfil,
    ViewUser,
    PiuImage,
    SetUpProfile,
    Options,
    Option,
    Inferior,
    Rigth,
    BarraPesquisa,
    Search,
    EspaçoCompartilhado,
    Seguidores,
    Seguidor,
    Title,
    SeguidorEmail,
    SeguidorFoto,
    SeguidorName,
    ShowMore
} from './styles';

import Home from '../../Images/Home.png';
import Explore from '../../Images/Explore.png';
import Notification from '../../Images/Notification.png';
import Messages from '../../Images/Messages.png';
import Bookmarks from '../../Images/Bookmarks.png';
import Lists from '../../Images/Lists.png';
import ProfileImage from '../../Images/Profile.png';
import More from '../../Images/More.png';
import Logo from '../../Images/Logo.png';

import Foto_capa from '../../Images/PJ_capa.jpg';

import Piu from '../../Images/Piu.png';
import voltar from '../../Images/Back.svg';

import PiuComent from '../../Components/Table';

export default function Feed() {
  
    const { user } = useAuth();
    const { LogOut } = useAuth();
    const token = useAuth();
    
    const [dados,setDados] = useState([]);
    const [formPiu,setFormPiu] = useState(['']);
    const [texto, setTexto] = useState('');
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

    const [aleatorio,setAleatorio] = useState([
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);

    if(dadosUser['length']>2 && aberto=='aberto'){
        setAleatorio(
        [Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);
        setAberto('fechado');
    }

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
        history.push('/campoPiu');
    }

    function Seguir(){
        history.push('/seguir');
    }

    const history = useHistory();

    function BackExecute(){
            LogOut();
            history.push('/');
    }

  return (
    <Body>
            <Aside>
                <LogoPiuPiuwer source={Logo} />
                <Menu>
                        <BotãoMenuIcon><IconMenu width={22} height={21} source={Home}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={22} height={16} source={Explore}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={19} height={22} source={Notification}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={22} height={18} source={Messages}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={19} height={20} source={Bookmarks}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={19} height={20} source={Lists}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={19} height={23} source={ProfileImage}/></BotãoMenuIcon>
                        <BotãoMenuIcon><IconMenu width={22} height={22} source={More}/></BotãoMenuIcon>
                        <BotãoPiu onPress={gerarPiu}>
                            Piu
                        </BotãoPiu>
                </Menu>
                <UserIdentification organize='column'>
                    <UserIdentificationImage source={user['foto']} />
                    <UserName>{user['first_name']} {user['last_name']}</UserName>
                    <UserEmail>@{user['username']}</UserEmail>
                </UserIdentification>
            </Aside>
            <Section>
                <Superior>
                    <Profile>
                        <Back source={voltar} onClick={BackExecute}/>
                        <UserInfo>
                        <UserName>{user['first_name']} {user['last_name']}</UserName>
                            <UserEmail>{user['seguidores']['length']} seguidores</UserEmail>
                        </UserInfo>
                    </Profile>
                    <General>
                        <Capa source={Foto_capa}/>
                        <Perfil source={user['foto']}/>
                        <ViewUser>
                            <PiuImage source={Piu}/>
                            <UserInfo>
                                <UserName>{user['first_name']} {user['last_name']}</UserName>
                                <UserEmail>@{user['username']}</UserEmail>
                            </UserInfo>
                            <SetUpProfile>Set up profile</SetUpProfile>
                        </ViewUser>
                    </General>
                    <Options>
                            <Option>Pius</Option>
                            <Option>Pius & RePius</Option>
                            <Option>Media</Option>
                            <Option>Likes</Option>
                    </Options>
                </Superior>
                <Inferior tamanho={20*dados.length}>
                    <PiuComent/>
                </Inferior>
            </Section>
            <Rigth>
                <BarraPesquisa>
                    <Search type="text" name="search" placeholder="Search PiuPiuwer" />
                </BarraPesquisa>
                <EspaçoCompartilhado>
                    <Seguidor height={25}><Title>You might like</Title></Seguidor>
                    {dadosUser.map ((dado, index) =>{
                        
                        if(aleatorio[0]==index || aleatorio[1]==index || aleatorio[2]==index){
                            return(
                                <Seguidor height={120}>
                                    <Seguidores>
                                        <SeguidorFoto source={dado['foto']}/>
                                        <SeguidorName>{dado['first_name']} {dado['last_name']}</SeguidorName>
                                        <SeguidorEmail>@{dado['username']}</SeguidorEmail>
                                    </Seguidores>
                                </Seguidor>
                        )}})}
                    <Seguidor height={25}><ShowMore onPress={Seguir}>Show more</ShowMore></Seguidor>
                </EspaçoCompartilhado>
            </Rigth>
      <StatusBar style="auto" />
    </Body>
  )
}